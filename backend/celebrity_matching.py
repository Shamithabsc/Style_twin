
from pathlib import Path

import pandas as pd

from body_shape import predict_body_shape


DATA_FILE = (
    Path(__file__).parent
    / "data"
    / "celebrity_measurements_processed.csv"
)

# Approximate tolerances used to convert ratio differences
# into similarity scores. These are initial tuning values.
RATIO_TOLERANCES = {
    "waist_to_hip_ratio": 0.12,
    "bust_to_hip_ratio": 0.12,
    "waist_to_bust_ratio": 0.12,
    "leg_to_height_ratio": 0.08,
    "torso_to_height_ratio": 0.08,
}


def load_celebrity_data():
    if not DATA_FILE.exists():
        raise FileNotFoundError(
            f"Celebrity dataset not found: {DATA_FILE}"
        )

    df = pd.read_csv(DATA_FILE)

    required = {
        "name",
        "height_cm",
        "bust_cm",
        "waist_cm",
        "hips_cm",
        "inseam_cm",
        "torso_length_cm",
    }

    missing = required - set(df.columns)

    if missing:
        raise ValueError(
            "Missing columns in celebrity dataset: "
            + ", ".join(sorted(missing))
        )

    for column in required - {"name"}:
        df[column] = pd.to_numeric(
            df[column], errors="coerce"
        )

    return df


def calculate_features(record):
    features = {}

    bust = record.get("bust_cm")
    waist = record.get("waist_cm")
    hips = record.get("hips_cm")
    height = record.get("height_cm")
    inseam = record.get("inseam_cm")
    torso = record.get("torso_length_cm")

    if pd.notna(waist) and pd.notna(hips) and waist > 0 and hips > 0:
        features["waist_to_hip_ratio"] = waist / hips

    if pd.notna(bust) and pd.notna(hips) and bust > 0 and hips > 0:
        features["bust_to_hip_ratio"] = bust / hips

    if pd.notna(waist) and pd.notna(bust) and waist > 0 and bust > 0:
        features["waist_to_bust_ratio"] = waist / bust

    if pd.notna(inseam) and pd.notna(height) and inseam > 0 and height > 0:
        features["leg_to_height_ratio"] = inseam / height

    if pd.notna(torso) and pd.notna(height) and torso > 0 and height > 0:
        features["torso_to_height_ratio"] = torso / height

    return features


def match_celebrities(
    bust_cm,
    waist_cm,
    hips_cm,
    height_cm=None,
    inseam_cm=None,
    torso_length_cm=None,
    top_n=5,
):
    prediction = predict_body_shape(
        bust_cm=bust_cm,
        waist_cm=waist_cm,
        hips_cm=hips_cm,
    )

    user_record = {
        "bust_cm": bust_cm,
        "waist_cm": waist_cm,
        "hips_cm": hips_cm,
        "height_cm": height_cm,
        "inseam_cm": inseam_cm,
        "torso_length_cm": torso_length_cm,
    }

    user_features = calculate_features(user_record)
    df = load_celebrity_data()

    results = []

    for _, row in df.iterrows():
        celebrity = row.to_dict()
        celebrity_features = calculate_features(celebrity)

        comparisons = []

        for feature, tolerance in RATIO_TOLERANCES.items():
            if feature not in user_features:
                continue

            if feature not in celebrity_features:
                continue

            difference = abs(
                user_features[feature]
                - celebrity_features[feature]
            )

            similarity = max(
                0.0,
                1.0 - difference / tolerance,
            )

            comparisons.append(similarity)

        # Avoid ranking a profile from too little information.
        if len(comparisons) < 2:
            continue

        score = round(
            100 * sum(comparisons) / len(comparisons), 1
        )

        results.append({
            "name": str(celebrity["name"]),
            "body_shape_label": (
                str(celebrity.get("body_shape_label"))
                if pd.notna(celebrity.get("body_shape_label"))
                else None
            ),
            "similarity_score": score,
            "compared_features": len(comparisons),
            "height_cm": (
                float(celebrity["height_cm"])
                if pd.notna(celebrity.get("height_cm"))
                else None
            ),
            "measurement_source": (
                str(celebrity.get("measurement_source"))
                if pd.notna(celebrity.get("measurement_source"))
                else None
            ),
        })

    results.sort(
        key=lambda item: item["similarity_score"],
        reverse=True,
    )

    return {
        "predicted_body_shape": prediction["body_shape"],
        "body_shape_explanation": prediction["message"],
        "matches": results[:top_n],
        "note": (
            "Scores compare available body-proportion ratios. "
            "They are prototype similarity scores, not validated "
            "probabilities or proof of visual resemblance."
        ),
    }
