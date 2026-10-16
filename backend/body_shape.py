
def predict_body_shape(
    bust_cm,
    waist_cm,
    hips_cm,
    shoulder_width_cm=None,
):
    """
    Estimate a body-shape category from circumference measurements.

    These are initial styling heuristics, not a medically
    validated or universally accepted classification system.
    """

    measurements = {
        "bust_cm": bust_cm,
        "waist_cm": waist_cm,
        "hips_cm": hips_cm,
    }

    # Validate required measurements
    for name, value in measurements.items():
        if value is None:
            return {
                "body_shape": "Insufficient data",
                "confidence": "unknown",
                "message": f"{name} is required.",
                "ratios": {},
            }

        if not isinstance(value, (int, float)) or value <= 0:
            return {
                "body_shape": "Insufficient data",
                "confidence": "unknown",
                "message": f"{name} must be a positive number.",
                "ratios": {},
            }

    bust = float(bust_cm)
    waist = float(waist_cm)
    hips = float(hips_cm)

    # Calculate proportions
    waist_to_hip = waist / hips
    bust_to_hip = bust / hips
    waist_to_bust = waist / bust

    average_upper_lower = (bust + hips) / 2
    waist_definition = waist / average_upper_lower

    # Compare bust and hip circumferences
    difference = abs(bust - hips) / max(bust, hips)

    # Initial configurable rules for the prototype
    if (
        waist >= bust * 0.90
        and waist >= hips * 0.90
    ):
        shape = "Apple / Oval"
        explanation = (
            "Your waist measurement is relatively close "
            "to your bust and hip measurements."
        )

    elif difference <= 0.05 and waist_definition <= 0.75:
        shape = "Hourglass"
        explanation = (
            "Your bust and hip measurements are similar, "
            "with a relatively defined waist."
        )

    elif hips >= bust * 1.05:
        shape = "Pear / Triangle"
        explanation = (
            "Your hip circumference is noticeably larger "
            "than your bust circumference."
        )

    elif bust >= hips * 1.05:
        shape = "Inverted Triangle"
        explanation = (
            "Your bust circumference is noticeably larger "
            "than your hip circumference."
        )

    elif difference <= 0.05:
        shape = "Rectangle"
        explanation = (
            "Your bust and hip measurements are similar, "
            "without a strongly defined waist under these rules."
        )

    else:
        shape = "Mixed / Uncertain"
        explanation = (
            "Your measurements do not clearly fit the "
            "initial classification rules."
        )

    ratios = {
        "waist_to_hip_ratio": round(waist_to_hip, 3),
        "bust_to_hip_ratio": round(bust_to_hip, 3),
        "waist_to_bust_ratio": round(waist_to_bust, 3),
        "waist_definition_ratio": round(waist_definition, 3),
    }

    # Width is retained as a separate feature.
    # Do not divide shoulder width by hip circumference:
    # they are different measurement types.
    if shoulder_width_cm is not None:
        if (
            isinstance(shoulder_width_cm, (int, float))
            and shoulder_width_cm > 0
        ):
            ratios["shoulder_width_cm"] = round(
                float(shoulder_width_cm), 2
            )

    return {
        "body_shape": shape,
        "confidence": "provisional",
        "message": explanation,
        "ratios": ratios,
        "note": (
            "This is an approximate styling estimate. "
            "It is not a definitive body classification."
        ),
    }
