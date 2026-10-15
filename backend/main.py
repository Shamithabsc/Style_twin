
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import mediapipe as mp
import cv2
import numpy as np

app = FastAPI(title="Your Style Twin API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Your Style Twin API is running!"}


@app.get("/health")
def health():
    return {"status": "healthy"}


@app.post("/analyze-face")
async def analyze_face(photo: UploadFile = File(...)):
    if photo.content_type not in [
        "image/jpeg",
        "image/png",
        "image/webp",
    ]:
        raise HTTPException(
            status_code=400,
            detail="Upload a JPG, PNG, or WEBP image."
        )

    image_bytes = await photo.read()

    if len(image_bytes) > 10 * 1024 * 1024:
        raise HTTPException(
            status_code=413,
            detail="Image must be smaller than 10 MB."
        )

    image_array = np.frombuffer(image_bytes, np.uint8)
    image = cv2.imdecode(image_array, cv2.IMREAD_COLOR)

    if image is None:
        raise HTTPException(
            status_code=400,
            detail="Could not read the uploaded image."
        )

    rgb_image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

    try:
        with mp.solutions.face_mesh.FaceMesh(
            static_image_mode=True,
            max_num_faces=1,
            refine_landmarks=True,
            min_detection_confidence=0.5,
        ) as face_mesh:

            result = face_mesh.process(rgb_image)

    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=f"Face analysis failed: {str(error)}"
        )

    if not result.multi_face_landmarks:
        raise HTTPException(
            status_code=422,
            detail="No face detected. Try a clear, front-facing photo."
        )

    landmarks = result.multi_face_landmarks[0].landmark

    def distance(point_a, point_b):
        dx = (
            landmarks[point_a].x - landmarks[point_b].x
        ) * image.shape[1]
        dy = (
            landmarks[point_a].y - landmarks[point_b].y
        ) * image.shape[0]
        return float(np.sqrt(dx * dx + dy * dy))

    # Approximate landmark-based proportions in pixels
    face_width = distance(234, 454)
    face_height = distance(10, 152)
    forehead_width = distance(103, 332)
    jaw_width = distance(172, 397)

    if face_height == 0 or face_width == 0:
        raise HTTPException(
            status_code=422,
            detail="Could not estimate face proportions."
        )

    ratio = face_height / face_width

    # Preliminary heuristic; not a definitive classification
    if ratio >= 1.55:
        estimated_shape = "Oblong"
    elif ratio <= 1.10:
        estimated_shape = "Round or Broad"
    elif jaw_width / face_width < 0.72:
        estimated_shape = "Heart or Tapered"
    elif forehead_width / face_width < 0.72:
        estimated_shape = "Diamond or Tapered"
    else:
        estimated_shape = "Oval or Balanced"

    return {
        "message": "Face analysis completed",
        "estimated_face_shape": estimated_shape,
        "proportions_pixels": {
            "face_width": round(face_width, 2),
            "face_height": round(face_height, 2),
            "forehead_width": round(forehead_width, 2),
            "jaw_width": round(jaw_width, 2),
        },
        "face_height_to_width_ratio": round(ratio, 2),
        "note": (
            "This is an experimental estimate from a single photo, "
            "not a definitive face-shape classification."
        ),
    }
