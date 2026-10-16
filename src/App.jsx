
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
  bodyProfile: "Measurement-based estimate",
};

const goalOptions = [
  "Find my celebrity style twin",
  "Face shape and hairstyle suggestions",
  "Makeup recommendations",
  "Outfit recommendations",
  "Personal color palette",
  "Discover my overall aesthetic",
];

function MeasurementIllustration({ type }) {
  // Soft fashion-illustration SVGs: organic curves, natural proportions, and clear tape placement.
  const skin = `skin-${type}`;
  const cloth = `cloth-${type}`;
  const arrow = `arrow-${type}`;
  const label = type === "bust" ? "Bust" : type === "waist" ? "Natural waist" : type === "hips" ? "Fullest hip" : type === "height" ? "Height" : type === "shoulder" ? "Shoulder width" : type === "torso" ? "Torso length" : "Inseam";
  const tape = (path) => <path d={path} fill="none" stroke="#c99b37" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />;
  const tapeHighlight = (path) => <path d={path} fill="none" stroke="#fff0b2" strokeWidth="1.3" strokeLinecap="round" />;
  const measurementMark = (x1, y1, x2, y2) => <path d={`M${x1} ${y1} L${x2} ${y2}`} stroke="#a8425e" strokeWidth="1.6" markerStart={`url(#${arrow})`} markerEnd={`url(#${arrow})`} />;

  return (
    <svg className={`st-measure-illustration st-measure-illustration-${type}`} viewBox="0 0 240 180" role="img" aria-label={`${label} measurement guide`}>
      <defs>
        <linearGradient id={skin} x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#f8dfd0"/><stop offset="100%" stopColor="#d7a18b"/></linearGradient>
        <linearGradient id={cloth} x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#d58b9a"/><stop offset="100%" stopColor="#9b5267"/></linearGradient>
        <marker id={arrow} markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto-start-reverse"><path d="M0 0 L6 3 L0 6 Z" fill="#a8425e"/></marker>
      </defs>
      <rect x="1" y="1" width="238" height="178" rx="14" fill="#fbf1ed" />
      {/* Soft shadow and a natural, connected upper-body silhouette */}
      <ellipse cx="112" cy="155" rx="51" ry="5" fill="#ead8d2" />
      {type === "height" ? <>
        {/* Full standing fashion figure with a natural head, shoulders, waist, legs and arms */}
        <path d="M91 31 C82 31 77 24 78 16 C79 7 86 4 93 7 C101 10 102 20 98 27 C96 29 94 30 91 31Z" fill={`url(#${skin})`} stroke="#bd8b77" strokeWidth=".8"/>
        <path d="M80 15 C80 6 87 2 94 7 C98 9 100 13 100 17 C96 13 91 12 87 14 C85 15 83 17 80 18Z" fill="#5b4142"/>
        <path d="M86 29 L86 37 Q91 41 96 37 L96 29" fill={`url(#${skin})`}/>
        <path d="M84 36 C77 38 72 43 69 50 L61 76 Q59 82 64 84 Q68 85 71 79 L81 57 L83 83 L80 112 L77 150 Q77 155 83 155 L89 155 L96 116 L101 155 L110 155 Q115 154 113 149 L108 111 L108 82 L107 54 L119 78 Q122 84 127 81 Q131 79 128 73 L117 48 Q113 39 101 36Z" fill={`url(#${skin})`} stroke="#c18e78" strokeWidth=".9" strokeLinejoin="round"/>
        <path d="M83 38 Q91 35 102 38 L108 56 L104 76 Q94 82 82 76 L81 55Z" fill={`url(#${cloth})`}/>
        <path d="M130 12 L130 155" stroke="#a8425e" strokeWidth="1.5" strokeDasharray="3 3"/>
        {measurementMark(137, 8, 137, 155)}
        <text x="145" y="79" fill="#963b56" fontSize="10" fontWeight="700">Height</text>
        <text x="145" y="91" fill="#8b6b70" fontSize="7.5">Head to floor</text>
      </> : <>
        {/* Head, neck, shoulders, arms and torso drawn as one soft, human silhouette */}
        <path d="M104 30 C99 27 97 21 99 14 C101 7 108 5 114 8 C120 11 121 19 118 25 C116 29 112 31 109 31Z" fill={`url(#${skin})`} stroke="#bd8b77" strokeWidth=".8"/>
        <path d="M98 20 C95 9 103 3 112 6 C121 8 124 16 121 25 L117 33 L116 20 C111 15 106 15 102 20 L102 30 L98 25Z" fill="#5b4142"/>
        <path d="M104 29 L104 38 Q110 42 116 37 L115 28" fill={`url(#${skin})`}/>
        <path d="M101 36 C93 38 86 42 81 49 C77 55 75 64 72 73 L64 91 Q62 96 67 98 Q71 99 74 94 L86 73 L91 91 Q94 98 91 111 L84 133 L81 151 Q81 156 87 157 L95 157 L105 125 L112 125 L122 157 L130 157 Q136 155 134 150 L131 132 L125 111 Q122 99 126 91 L132 73 L144 94 Q147 99 152 96 Q156 93 153 88 L143 66 Q138 51 129 43 Q123 38 117 36Z" fill={`url(#${skin})`} stroke="#c18e78" strokeWidth=".9" strokeLinejoin="round"/>
        {/* Subtle garment follows body contours instead of forming a hard geometric block */}
        <path d="M101 37 Q110 40 118 37 C126 39 132 43 137 50 L130 70 Q123 77 124 87 C125 96 132 103 139 113 Q142 119 135 122 Q110 129 85 122 Q78 119 82 113 C89 103 96 96 97 87 Q98 77 88 69 L82 50 Q91 40 101 37Z" fill={`url(#${cloth})`} stroke="#9b5267" strokeWidth=".7"/>
        <path d="M88 69 Q99 61 110 70 Q121 61 131 69" fill="none" stroke="#f1c3cc" strokeWidth="1.2" opacity=".85"/>
        <path d="M94 107 Q110 112 127 107 L130 120 Q110 126 90 120Z" fill="#d6a28e" opacity=".45"/>
        {/* The tape follows the body's curve at the relevant measurement point */}
        {type === "bust" && <>{tape("M77 70 C91 64 99 66 110 71 C121 66 132 64 145 70")}{tapeHighlight("M77 69 C91 63 99 65 110 70 C121 65 132 63 145 69")}{measurementMark(151, 67, 177, 55)}<text x="204" y="49" textAnchor="end" fill="#963b56" fontSize="9.5" fontWeight="700">Bust</text></>}
        {type === "waist" && <>{tape("M91 100 Q110 106 129 100")}{tapeHighlight("M91 99 Q110 105 129 99")}{measurementMark(133, 100, 163, 88)}<text x="207" y="82" textAnchor="end" fill="#963b56" fontSize="9" fontWeight="700">Natural waist</text></>}
        {type === "hips" && <>{tape("M82 116 C94 121 101 123 110 123 C119 123 127 121 138 116")}{tapeHighlight("M82 115 C94 120 101 122 110 122 C119 122 127 120 138 115")}{measurementMark(142, 119, 169, 108)}<text x="210" y="102" textAnchor="end" fill="#963b56" fontSize="9" fontWeight="700">Fullest hip</text></>}
        {type === "shoulder" && <>{measurementMark(79, 48, 140, 48)}<text x="110" y="22" textAnchor="middle" fill="#963b56" fontSize="9" fontWeight="700">Shoulder width</text></>}
        {type === "torso" && <>{measurementMark(151, 42, 151, 117)}<text x="162" y="77" fill="#963b56" fontSize="9" fontWeight="700">Torso</text><text x="162" y="88" fill="#963b56" fontSize="9" fontWeight="700">length</text></>}
        {type === "inseam" && <>{measurementMark(110, 126, 110, 155)}<text x="121" y="143" fill="#963b56" fontSize="9" fontWeight="700">Inseam</text></>}
      </>}
      <text x="12" y="169" fill="#8f5361" fontSize="7.5">Guide only • keep tape level and snug</text>
    </svg>
  );
}

function ResultsDashboard({
  analysis,
  bodyResult,
  celebrityMatches = [],
  preferences,
  measurements = {},
  measurementUnit = "cm",
  onAnalyzeAgain,
  onStartOver,
}) {
  const faceShape =
    analysis?.estimated_face_shape || "Not available";

  const bodyShape =
    bodyResult?.body_shape || "Not available";

  const faceStats = [
    ["Face width", analysis?.proportions_pixels?.face_width],
    ["Face height", analysis?.proportions_pixels?.face_height],
    ["Forehead width", analysis?.proportions_pixels?.forehead_width],
    ["Jaw width", analysis?.proportions_pixels?.jaw_width],
  ];

  const measurementStats = [
    ["Bust", measurements.bust],
    ["Waist", measurements.waist],
    ["Hips", measurements.hips],
    ["Height", measurements.height],
  ].filter(([, value]) => value !== undefined && value !== "");

  return (
    <section className="results-dashboard">
      <header className="results-heading">
        <span className="results-eyebrow">
          YOUR STYLE TWIN PROFILE
        </span>
        <h2>Your results, at a glance.</h2>
        <p>
          Explore your analysis, body proportions, and
          personal style preferences.
        </p>
      </header>

      <div className="results-summary-grid">
        <article className="results-card face-card">
          <span>FACE ANALYSIS</span>
          <div className="results-card-icon">✳</div>
          <h3>{faceShape}</h3>
          <p>Estimated face shape</p>
        </article>

        <article className="results-card body-card">
          <span>BODY PROFILE</span>
          <div className="results-card-icon">◇</div>
          <h3>{bodyShape}</h3>
          <p>Measurement-based estimate</p>
        </article>

        <article className="results-card style-card">
          <span>YOUR AESTHETIC</span>
          <div className="results-card-icon">♡</div>
          <h3>{preferences?.aesthetic || "Not selected"}</h3>
          <p>{preferences?.occasion || "Personal style"}</p>
        </article>
      </div>

      <section className="results-section">
        <h3>Face proportions</h3>
        <div className="results-stat-grid">
          {faceStats.map(([label, value]) => (
            <div className="results-stat" key={label}>
              <span>{label}</span>
              <strong>
                {value ?? "—"}
                {value != null && <small> px</small>}
              </strong>
            </div>
          ))}
        </div>
        <p className="results-note">
          Face measurements are pixel estimates, not real-world
          measurements. Results can vary with photo angle and lighting.
        </p>
      </section>

      {measurementStats.length > 0 && (
        <section className="results-section">
          <h3>Your measurements</h3>
          <div className="results-stat-grid">
            {measurementStats.map(([label, value]) => (
              <div className="results-stat" key={label}>
                <span>{label}</span>
                <strong>
                  {value} <small>{measurementUnit}</small>
                </strong>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="results-section">
        <h3>Your Style Twin matches</h3>

        {celebrityMatches.length > 0 ? (
          <div className="results-match-list">
            {celebrityMatches.map((match, index) => (
              <article
                className="results-match"
                key={`${match.name}-${index}`}
              >
                <div className="results-rank">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="results-match-info">
                  <strong>{match.name}</strong>
                  <span>
                    {match.body_shape_label || "Body proportions"}
                  </span>
                </div>

                <div className="results-score">
                  <strong>
                    {match.similarity_score ?? "—"}
                    {match.similarity_score != null && "%"}
                  </strong>
                  <span>Similarity</span>
                </div>
              </article>
            ))}
            <p className="results-note">
              Matches reflect the available body-proportion dataset;
              they are not facial lookalike scores.
            </p>
          </div>
        ) : (
          <p className="results-empty">
            No matches are available yet. Complete the measurement
            step to check whether body-proportion matches can be found.
          </p>
        )}
      </section>

      <section className="results-section">
        <h3>Your style preferences</h3>
        <div className="results-preference-list">
          {[
            preferences?.aesthetic,
            preferences?.occasion,
            preferences?.budget,
            preferences?.hair,
            preferences?.makeup,
            preferences?.colors,
            ...(preferences?.goals || []),
          ]
            .filter(Boolean)
            .map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
        </div>
      </section>

      <footer className="results-actions">
        <button
          type="button"
          className="results-button secondary"
          onClick={onAnalyzeAgain}
        >
          Analyze another photo
        </button>

        <button
          type="button"
          className="results-button primary"
          onClick={onStartOver}
        >
          Start a new profile ↗
        </button>
      </footer>
    </section>
  );
}

function App() {
  const [preferences, setPreferences] = useState(initialPreferences);
  const [showPhotoStep, setShowPhotoStep] = useState(false);
  const [showMeasurementStep, setShowMeasurementStep] = useState(false);
  const [measurementUnit, setMeasurementUnit] = useState("cm");
  const [measurements, setMeasurements] = useState({
    height: "",
    weight: "",
    bust: "",
    waist: "",
    hips: "",
    shoulder: "",
    torso: "",
    inseam: "",
  });
  const [bodyResult, setBodyResult] = useState(null);
  const [celebrityMatches, setCelebrityMatches] = useState([]);
  const [measurementLoading, setMeasurementLoading] = useState(false);
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
    if (preferences.bodyProfile !== "Skip") {
      setShowMeasurementStep(true);
      setShowPhotoStep(false);
    } else {
      setShowMeasurementStep(false);
      setShowPhotoStep(true);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateMeasurement(field, value) {
    setMeasurements((previous) => ({ ...previous, [field]: value }));
    setBodyResult(null);
    setCelebrityMatches([]);
  }

  function measurementToCm(value) {
    if (value === "" || value === null || value === undefined) return null;
    const number = Number(value);
    if (!Number.isFinite(number) || number <= 0) return null;
    return measurementUnit === "in" ? number * 2.54 : number;
  }

  async function submitMeasurements(event) {
    event.preventDefault();
    setError("");
    setBodyResult(null);
    setCelebrityMatches([]);

    const bust = measurementToCm(measurements.bust);
    const waist = measurementToCm(measurements.waist);
    const hips = measurementToCm(measurements.hips);

    if (!bust || !waist || !hips) {
      setError("Enter valid bust, waist, and hip measurements to estimate your body shape.");
      return;
    }

    const optional = {
      height_cm: measurementToCm(measurements.height),
      inseam_cm: measurementToCm(measurements.inseam),
      torso_length_cm: measurementToCm(measurements.torso),
      shoulder_width_cm: measurementToCm(measurements.shoulder),
    };

    const cleanOptional = Object.fromEntries(
      Object.entries(optional).filter(([, value]) => value !== null)
    );

    const bodyPayload = {
      bust_cm: bust,
      waist_cm: waist,
      hips_cm: hips,
      ...(cleanOptional.shoulder_width_cm
        ? { shoulder_width_cm: cleanOptional.shoulder_width_cm }
        : {}),
    };

    const matchPayload = {
      bust_cm: bust,
      waist_cm: waist,
      hips_cm: hips,
      ...(cleanOptional.height_cm ? { height_cm: cleanOptional.height_cm } : {}),
      ...(cleanOptional.inseam_cm ? { inseam_cm: cleanOptional.inseam_cm } : {}),
      ...(cleanOptional.torso_length_cm
        ? { torso_length_cm: cleanOptional.torso_length_cm }
        : {}),
    };

    setMeasurementLoading(true);
    try {
      const [shapeResponse, matchResponse] = await Promise.all([
        fetch("http://localhost:8000/predict-body-shape", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bodyPayload),
        }),
        fetch("http://localhost:8000/match-celebrities", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(matchPayload),
        }),
      ]);

      const [shapeData, matchData] = await Promise.all([
        shapeResponse.json(),
        matchResponse.json(),
      ]);

      if (!shapeResponse.ok) {
        throw new Error(shapeData.detail || "Unable to predict your body shape.");
      }
      if (!matchResponse.ok) {
        throw new Error(matchData.detail || "Unable to match celebrity profiles.");
      }

      setBodyResult(shapeData);
      setCelebrityMatches(matchData.matches || []);
    } catch (err) {
      setError(
        err.message ||
          "Could not connect to the backend. Check that FastAPI is running on port 8000."
      );
    } finally {
      setMeasurementLoading(false);
    }
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
    setShowMeasurementStep(false);
    setMeasurementUnit("cm");
    setMeasurements({
      height: "",
      weight: "",
      bust: "",
      waist: "",
      hips: "",
      shoulder: "",
      torso: "",
      inseam: "",
    });
    setBodyResult(null);
    setCelebrityMatches([]);
    setMeasurementLoading(false);
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
          <div className={!showMeasurementStep && !showPhotoStep ? "st-progress-active" : "st-progress-done"}>
            <span>1</span> Preferences
          </div>
          <div className="st-progress-line" />
          <div className={showMeasurementStep ? "st-progress-active" : showPhotoStep ? "st-progress-done" : ""}>
            <span>2</span> Measurements
          </div>
          <div className="st-progress-line" />
          <div className={showPhotoStep ? "st-progress-active" : ""}>
            <span>3</span> Photo analysis
          </div>
        </div>
      </section>

      {!showPhotoStep && !showMeasurementStep ? (
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
                <option value="Measurement-based estimate">
                  Estimate body shape from measurements
                </option>
                <option value="Skip">Skip body analysis</option>
              </select>
              <small>
You'll enter measurements on the next step. Your body-shape estimate
                uses bust, waist, and hip measurements; the face-photo analysis is separate.
              </small>
            </div>

            {error && <div className="st-error">{error}</div>}

            <button className="st-primary-button" type="submit">
              {preferences.bodyProfile === "Skip"
                ? "Continue to photo analysis"
                : "Continue to body measurements"} <span>→</span>
            </button>

            <p className="st-privacy-note">
              Your preferences are kept in this session only and are
              not saved between visits.
            </p>
          </form>
        </section>
      ) : showMeasurementStep ? (
        <section className="st-panel">
          <div className="st-panel-heading">
            <span className="st-section-number">02 / BODY MEASUREMENTS</span>
            <h2>Let's understand your proportions.</h2>
            <p>
              Follow the quick measuring guide, enter your measurements, and
              get an approximate body-shape estimate plus body-proportion matches
              from your celebrity dataset.
            </p>
          </div>

          <div className="st-measurement-intro">
            <strong>Before you begin</strong>
            <p>
              Use a flexible tape measure over light, fitted clothing. Keep the
              tape level and snug without pulling tightly. Choose cm or inches
              before entering values. If you do not know an optional measurement,
              leave it blank.
            </p>
            <label className="st-unit-picker" htmlFor="measurementUnit">
              Measurement units
              <select
                id="measurementUnit"
                value={measurementUnit}
                onChange={(event) => {
                  setMeasurementUnit(event.target.value);
                  setBodyResult(null);
                  setCelebrityMatches([]);
                }}
              >
                <option value="cm">Centimetres (cm)</option>
                <option value="in">Inches (in)</option>
              </select>
            </label>
          </div>

          <form onSubmit={submitMeasurements}>
            <div className="st-measure-guide-grid">
              <article className="st-measure-guide">
                <div className="st-guide-top"><span className="st-guide-number">01</span><MeasurementIllustration type="bust" /></div>
                <div className="st-guide-copy">
                  <h3>Bust</h3>
                  <p>Wrap the tape around the fullest part of the bust, keeping it horizontal across your back.</p>
                </div>
              </article>
              <article className="st-measure-guide">
                <div className="st-guide-top"><span className="st-guide-number">02</span><MeasurementIllustration type="waist" /></div>
                <div className="st-guide-copy">
                  <h3>Waist</h3>
                  <p>Measure around your natural waist, usually the narrowest part of your torso. Stand relaxed.</p>
                </div>
              </article>
              <article className="st-measure-guide">
                <div className="st-guide-top"><span className="st-guide-number">03</span><MeasurementIllustration type="hips" /></div>
                <div className="st-guide-copy">
                  <h3>Hips</h3>
                  <p>Measure around the fullest part of your hips and seat, keeping the tape level.</p>
                </div>
              </article>
              <article className="st-measure-guide">
                <div className="st-guide-top"><span className="st-guide-number">04</span><MeasurementIllustration type="height" /></div>
                <div className="st-guide-copy">
                  <h3>Height & proportions</h3>
                  <p>Stand straight for height. Torso length and inseam are optional refinements.</p>
                </div>
              </article>
            </div>

            <div className="st-measurement-fields">
              {[
                { key: "bust", label: "Bust circumference", required: true, hint: "Around the fullest part of the bust." },
                { key: "waist", label: "Waist circumference", required: true, hint: "Around your natural waist." },
                { key: "hips", label: "Hip circumference", required: true, hint: "Around the fullest part of the hips and seat." },
                { key: "height", label: "Height", required: false, hint: "Stand straight against a wall if measuring yourself." },
                { key: "shoulder", label: "Shoulder width", required: false, hint: "Across the back between shoulder points; optional." },
                { key: "torso", label: "Torso length", required: false, hint: "Use one consistent method if you know this measurement." },
                { key: "inseam", label: "Inseam / leg length", required: false, hint: "From the crotch seam to the ankle, if known." },
                { key: "weight", label: "Weight (kg)", required: false, hint: "Optional context only; not used to classify body shape." },
              ].map((field) => (
                <div className="st-field" key={field.key}>
                  <label htmlFor={`measure-${field.key}`}>
                    {field.label}
                    {field.required && <span className="st-required">Required</span>}
                    {!field.required && <span className="st-required">Optional</span>}
                  </label>
                  <input
                    id={`measure-${field.key}`}
                    className="st-measure-input"
                    type="number"
                    min="0.1"
                    step="any"
                    inputMode="decimal"
                    value={measurements[field.key]}
                    onChange={(event) => updateMeasurement(field.key, event.target.value)}
                    required={field.required}
                    placeholder={field.key === "weight" ? "e.g. 58" : measurementUnit === "cm" ? "Enter cm" : "Enter inches"}
                  />
                  <small>{field.hint}</small>
                </div>
              ))}
            </div>

            {error && <div className="st-error" role="alert">{error}</div>}

            <button className="st-primary-button" type="submit" disabled={measurementLoading}>
              {measurementLoading ? "Calculating your profile..." : "Predict body shape & find matches"}
              {!measurementLoading && <span>→</span>}
            </button>
          </form>

          {bodyResult && (
            <div className="st-results st-body-results" aria-live="polite">
              <span className="st-section-number">YOUR BODY PROFILE</span>
              <h3>{bodyResult.body_shape}</h3>
              <p>{bodyResult.message}</p>
              <p className="st-result-caveat">
                This is an approximate styling estimate, not a definitive classification.
                Celebrity results compare available body-proportion ratios, not facial resemblance.
              </p>

              {bodyResult.ratios && (
                <div className="st-ratio-grid">
                  {Object.entries(bodyResult.ratios)
                    .filter(([key]) => key.endsWith("_ratio"))
                    .map(([key, value]) => (
                      <div key={key}>
                        <small>{key.replaceAll("_", " ")}</small>
                        <strong>{value}</strong>
                      </div>
                    ))}
                </div>
              )}

              <div className="st-celebrity-results">
                <h3>Celebrity body-proportion matches</h3>
                {celebrityMatches.length ? (
                  <div className="st-match-list">
                    {celebrityMatches.map((match, index) => (
                      <article className="st-match-card" key={`${match.name}-${index}`}>
                        <div className="st-match-rank">{index + 1}</div>
                        <div className="st-match-details">
                          <strong>{match.name}</strong>
                          <span>
                            {match.body_shape_label || "Body-shape label unavailable"}
                            {match.height_cm ? ` · ${match.height_cm} cm` : ""}
                          </span>
                          <small>{match.compared_features} comparable proportion features</small>
                        </div>
                        <div className="st-match-score">
                          <strong>{match.similarity_score}%</strong>
                          <small>similarity score</small>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <p>
                    No close matches could be calculated from the available data.
                    Add more verified celebrity measurements to improve coverage.
                  </p>
                )}
              </div>
              <button
                className="st-primary-button"
                type="button"
                onClick={() => {
                  setShowMeasurementStep(false);
                  setShowPhotoStep(true);
                  setError("");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Continue to photo analysis <span>→</span>
              </button>
            </div>
          )}

          <button
            className="st-secondary-button"
            type="button"
            onClick={() => {
              setShowMeasurementStep(false);
              setShowPhotoStep(false);
              setError("");
            }}
          >
            ← Back to preferences
          </button>
        </section>
      ) : (
        <section className="st-panel">
          <div className="st-panel-heading">
            <span className="st-section-number">03 / PHOTO ANALYSIS</span>
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
              <ResultsDashboard
              analysis={analysis}
              bodyResult={bodyResult}
              celebrityMatches={celebrityMatches}
              preferences={preferences}
              measurements={measurements}
              measurementUnit={measurementUnit}
              onAnalyzeAgain={() => {
                setAnalysis(null);
                setPhoto(null);
                setPreview("");
                setError("");
    }}
    onStartOver={startOver}
  />
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
              if (preferences.bodyProfile !== "Skip") {
                setShowMeasurementStep(true);
              }
              setError("");
            }}
          >
            {preferences.bodyProfile === "Skip"
              ? "← Back to preferences"
              : "← Back to measurements"}
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
