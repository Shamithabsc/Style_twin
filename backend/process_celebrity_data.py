
from pathlib import Path
import pandas as pd

# Dataset paths
DATA_DIR = Path(__file__).parent / "data"
INPUT_FILE = DATA_DIR / "celebrity_measurements.csv"
OUTPUT_FILE = DATA_DIR / "celebrity_measurements_processed.csv"

# Load the dataset
df = pd.read_csv(INPUT_FILE)

# Convert measurement columns to numeric values
measurement_columns = [
    "height_cm",
    "weight_kg",
    "bust_cm",
    "waist_cm",
    "hips_cm",
    "shoulder_width_cm",
    "torso_length_cm",
    "inseam_cm",
]

for column in measurement_columns:
    df[column] = pd.to_numeric(df[column], errors="coerce")

# Calculate ratios only when both measurements are valid
def safe_ratio(numerator, denominator):
    result = numerator / denominator.where(denominator > 0)
    return result.where(
        numerator.notna()
        & denominator.notna()
        & (numerator > 0)
    )

df["waist_to_hip_ratio"] = safe_ratio(
    df["waist_cm"], df["hips_cm"]
)

df["bust_to_hip_ratio"] = safe_ratio(
    df["bust_cm"], df["hips_cm"]
)

df["waist_to_bust_ratio"] = safe_ratio(
    df["waist_cm"], df["bust_cm"]
)

df["leg_to_height_ratio"] = safe_ratio(
    df["inseam_cm"], df["height_cm"]
)

df["torso_to_height_ratio"] = safe_ratio(
    df["torso_length_cm"], df["height_cm"]
)

# Basic data quality checks
print("\nDATASET SUMMARY")
print("----------------")
print(f"Total celebrity records: {len(df)}")
print(f"Duplicate names: {df['name'].duplicated().sum()}")

print("\nMissing measurements:")
print(df[measurement_columns].isna().sum())

# Save processed dataset
df.to_csv(OUTPUT_FILE, index=False)

print("\nCalculated features:")
print(
    df[
        [
            "name",
            "waist_to_hip_ratio",
            "bust_to_hip_ratio",
            "waist_to_bust_ratio",
            "leg_to_height_ratio",
            "torso_to_height_ratio",
        ]
    ].to_string(index=False)
)

print(f"\nProcessed dataset saved to:\n{OUTPUT_FILE}")
