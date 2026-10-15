
import { useState } from "react";
import "./style-twin.css";

const initialPreferences = {
  ageGroup: "18+",
  goals: ["Find my celebrity style twin", "Outfit recommendations"],
  aesthetic: "Help me discover",
  occasion: "Everyday wear",
  budget: "Affordable",
  hair: "Recommend for me",
  makeup: "Natural",
  colors: "Help me discover",
  bodyProfile: "Photo-based estimate",
};

const goalOptions = [
  "Find my celebrity style twin",
  "Face shape and hairstyle suggestions",
  "Makeup recommendations",
  "Outfit recommendations",
  "Personal color palette",
  "Discover my overall aesthetic",
];

function App() {
  const [preferences, setPreferences] = useState(initialPreferences);
  const [showPhotoStep, setShowPhotoStep] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function updatePreference(field, value) {
    setPreferences((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  function toggleGoal(goal) {
    setPreferences((previous) => ({
      ...previous,
      goals: previous.goals.includes(goal)
        ? previous.goals.filter((item) => item !== goal)
        : [...previous.goals, goal],
    }));
  }

  function continueToPhotoStep(event) {
    event.preventDefault();

    if (preferences.goals.length === 0) {
      setError("Please select at least one style goal.");
      return;
    }

    setError("");
    setShowPhotoStep(true);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handlePhotoChange(event) {
    const file = event.target.files?.[0];

    setAnalysis(null);
    setError("");
    setPhoto(null);
    setPreview("");

    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    if (!allowedTypes.includes(file.type)) {
      setError("Please choose a JPG, PNG, or WEBP image.");
      event.target.value = "";
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("Your image must be smaller than 10 MB.");
      event.target.value = "";
      return;
    }

    setPhoto(file);
    setPreview(URL.createObjectURL(file));
  }

  async function analyzePhoto() {
    if (!photo) {
      setError("Please upload a photo first.");
      return;
    }

    setLoading(true);
    setError("");
    setAnalysis(null);

    try {
      const formData = new FormData();
      formData.append("photo", photo);

      const response = await fetch(
        "http://localhost:8000/analyze-face",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Unable to analyze this photo."
        );
      }

      setAnalysis(data);
    } catch (err) {
      setError(
        err.message ||
          "Could not connect to the backend. Check that FastAPI is running on port 8000."
      );
    } finally {
      setLoading(false);
    }
  }

  function startOver() {
    setPreferences(initialPreferences);
    setShowPhotoStep(false);
    setPhoto(null);
    setPreview("");
    setAnalysis(null);
    setError("");
    setLoading(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="st-app">
      <header className="st-header">
        <a
          href="#home"
          className="st-brand"
          onClick={(event) => {
            event.preventDefault();
            startOver();
          }}
        >
          <span className="st-brand-icon">✳</span>
          <span>Your Style Twin</span>
        </a>
        <span className="st-header-note">
          Your features. Your taste. Your style.
        </span>
      </header>

      <section className="st-hero" id="home">
        <span className="st-eyebrow">
          YOUR PERSONAL STYLE DISCOVERY
        </span>
        <h1>
          Discover the style
          <br />
          <span>that feels like you.</span>
        </h1>
        <p>
          Tell us what you love. We'll use your preferences and
          photo-based features to start building your personal
          style profile.
        </p>

        <div className="st-progress">
          <div className={!showPhotoStep ? "st-progress-active" : "st-progress-done"}>
            <span>1</span> Your preferences
          </div>
          <div className="st-progress-line" />
          <div className={showPhotoStep ? "st-progress-active" : ""}>
            <span>2</span> Photo analysis
          </div>
        </div>
      </section>

      {!showPhotoStep ? (
        <section className="st-panel">
          <div className="st-panel-heading">
            <span className="st-section-number">01 / GET TO KNOW YOU</span>
            <h2>Let's find your style.</h2>
            <p>
              Choose what feels right. You can change your choices
              later.
            </p>
          </div>

          <form onSubmit={continueToPhotoStep}>
            <div className="st-field">
              <label htmlFor="ageGroup">Age group</label>
              <select
                id="ageGroup"
                value={preferences.ageGroup}
                onChange={(e) =>
                  updatePreference("ageGroup", e.target.value)
                }
              >
                <option value="Under 18">Under 18</option>
                <option value="18+">18 or older</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              <small>Used only to help tailor age-appropriate styling.</small>
            </div>

            <div className="st-field">
              <span className="st-label">
                What would you like help with?
                <span className="st-required">Choose at least one</span>
              </span>
              <div className="st-choice-grid">
                {goalOptions.map((goal) => (
                  <label
                    className={`st-choice ${
                      preferences.goals.includes(goal) ? "selected" : ""
                    }`}
                    key={goal}
                  >
                    <input
                      type="checkbox"
                      checked={preferences.goals.includes(goal)}
                      onChange={() => toggleGoal(goal)}
                    />
                    <span className="st-checkmark">
                      {preferences.goals.includes(goal) ? "✓" : "+"}
                    </span>
                    <span>{goal}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="st-field">
              <label htmlFor="aesthetic">Which aesthetic sounds like you?</label>
              <select
                id="aesthetic"
                value={preferences.aesthetic}
                onChange={(e) =>
                  updatePreference("aesthetic", e.target.value)
                }
              >
                {[
                  "Help me discover",
                  "Elegant / Old Money",
                  "Soft / Romantic",
                  "Minimalist",
                  "Edgy / Streetwear",
                  "Coquette",
                  "Sporty",
                  "Mix of aesthetics",
                ].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="st-two-column">
              <div className="st-field">
                <label htmlFor="occasion">Main occasion</label>
                <select
                  id="occasion"
                  value={preferences.occasion}
                  onChange={(e) =>
                    updatePreference("occasion", e.target.value)
                  }
                >
                  {[
                    "Everyday wear",
                    "College / Work",
                    "Parties and events",
                    "Date nights",
                    "Traditional / Ethnic wear",
                    "All occasions",
                  ].map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="st-field">
                <label htmlFor="budget">Clothing budget</label>
                <select
                  id="budget"
                  value={preferences.budget}
                  onChange={(e) =>
                    updatePreference("budget", e.target.value)
                  }
                >
                  {[
                    "Affordable",
                    "Mid-range",
                    "Premium",
                    "No shopping links; use my existing wardrobe",
                  ].map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="st-two-column">
              <div className="st-field">
                <label htmlFor="hair">Hair recommendations</label>
                <select
                  id="hair"
                  value={preferences.hair}
                  onChange={(e) =>
                    updatePreference("hair", e.target.value)
                  }
                >
                  {[
                    "Recommend for me",
                    "Short hair",
                    "Medium hair",
                    "Long hair",
                    "Keep my current length",
                  ].map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="st-field">
                <label htmlFor="makeup">Makeup preference</label>
                <select
                  id="makeup"
                  value={preferences.makeup}
                  onChange={(e) =>
                    updatePreference("makeup", e.target.value)
                  }
                >
                  {[
                    "Natural",
                    "Soft glam",
                    "Full glam",
                    "Minimal / no makeup",
                    "Recommend for me",
                  ].map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="st-field">
              <label htmlFor="colors">Color palette</label>
              <select
                id="colors"
                value={preferences.colors}
                onChange={(e) =>
                  updatePreference("colors", e.target.value)
                }
              >
                {[
                  "Help me discover",
                  "Warm tones",
                  "Cool tones",
                  "Neutral tones",
                  "Bright colors",
                  "Mostly black and white",
                ].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="st-field">
              <label htmlFor="bodyProfile">Body profile</label>
              <select
                id="bodyProfile"
                value={preferences.bodyProfile}
                onChange={(e) =>
                  updatePreference("bodyProfile", e.target.value)
                }
              >
                <option value="Photo-based estimate">
                  Estimate proportions from a full-body photo
                </option>
                <option value="Self-selected">
                  Let me select my own body-shape description
                </option>
                <option value="Skip">Skip body analysis</option>
              </select>
              <small>
                Body analysis will be a separate feature. The current
                backend analyzes facial proportions only.
              </small>
            </div>

            {error && <div className="st-error">{error}</div>}

            <button className="st-primary-button" type="submit">
              Continue to photo analysis <span>→</span>
            </button>

            <p className="st-privacy-note">
              Your preferences are kept in this session only and are
              not saved between visits.
            </p>
          </form>
        </section>
      ) : (
        <section className="st-panel">
          <div className="st-panel-heading">
            <span className="st-section-number">02 / PHOTO ANALYSIS</span>
            <h2>Let's look at your features.</h2>
            <p>
              Upload a clear, front-facing face photo in good lighting.
              Your photo is sent to your local analysis server.
            </p>
          </div>

          <div className="st-profile-summary">
            <span className="st-summary-title">YOUR STYLE PROFILE</span>
            <div className="st-summary-grid">
              <div>
                <small>Style goals</small>
                <strong>{preferences.goals.length} selected</strong>
              </div>
              <div>
                <small>Aesthetic</small>
                <strong>{preferences.aesthetic}</strong>
              </div>
              <div>
                <small>Occasion</small>
                <strong>{preferences.occasion}</strong>
              </div>
              <div>
                <small>Budget</small>
                <strong>{preferences.budget}</strong>
              </div>
            </div>
          </div>

          <label className="st-upload-area" htmlFor="photoUpload">
            {preview ? (
              <img
                className="st-photo-preview"
                src={preview}
                alt="Selected face preview"
              />
            ) : (
              <>
                <span className="st-upload-icon">↑</span>
                <strong>Choose your face photo</strong>
                <span>JPG, PNG or WEBP · Maximum 10 MB</span>
              </>
            )}
            <input
              id="photoUpload"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handlePhotoChange}
            />
            {preview && <span className="st-change-photo">Choose another photo</span>}
          </label>

          {error && <div className="st-error">{error}</div>}

          <button
            className="st-primary-button"
            type="button"
            onClick={analyzePhoto}
            disabled={!photo || loading}
          >
            {loading ? "Analyzing your photo..." : "Analyze my face"}
            {!loading && <span>→</span>}
          </button>

          {analysis && (
            <div className="st-results" aria-live="polite">
              <span className="st-section-number">YOUR INITIAL ANALYSIS</span>
              <h3>{analysis.estimated_face_shape}</h3>
              <p>
                This is an initial estimate from your photo. It is not a
                definitive classification.
              </p>

              <div className="st-measurements">
                <div>
                  <small>Face width</small>
                  <strong>{analysis.proportions_pixels?.face_width ?? "—"} px</strong>
                </div>
                <div>
                  <small>Face height</small>
                  <strong>{analysis.proportions_pixels?.face_height ?? "—"} px</strong>
                </div>
                <div>
                  <small>Forehead width</small>
                  <strong>{analysis.proportions_pixels?.forehead_width ?? "—"} px</strong>
                </div>
                <div>
                  <small>Jaw width</small>
                  <strong>{analysis.proportions_pixels?.jaw_width ?? "—"} px</strong>
                </div>
              </div>

              <p className="st-next-note">
                Your preferences and face estimate are now ready for the
                next development step: personalized hairstyle and style
                recommendations.
              </p>
            </div>
          )}

          <button
            className="st-secondary-button"
            type="button"
            onClick={() => {
              setShowPhotoStep(false);
              setError("");
            }}
          >
            ← Back to preferences
          </button>
        </section>
      )}

      <footer className="st-footer">
        <span>Your Style Twin</span>
        <span>Personal style starts with you.</span>
      </footer>
    </main>
  );
}

export default App;
