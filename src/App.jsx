
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
  const labels = {
    bust: "Bust",
    waist: "Natural waist",
    hips: "Fullest hip",
    height: "Height",
    shoulder: "Shoulder width",
    torso: "Torso length",
    inseam: "Inseam",
  };

  const label = labels[type] || "Measurement";

  return (
    <svg
      className={`st-measure-illustration st-measure-illustration-${type}`}
      viewBox="0 0 240 180"
      role="img"
      aria-label={`${label} measurement guide`}
    >
      <defs>
        <linearGradient id={`skin-${type}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f8dfd0" />
          <stop offset="100%" stopColor="#d7a18b" />
        </linearGradient>
        <linearGradient id={`cloth-${type}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d58b9a" />
          <stop offset="100%" stopColor="#9b5267" />
        </linearGradient>
        <marker
          id={`arrow-${type}`}
          markerWidth="6"
          markerHeight="6"
          refX="3"
          refY="3"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L6 3 L0 6 Z" fill="#a8425e" />
        </marker>
      </defs>

      <rect x="1" y="1" width="238" height="178" rx="14" fill="#fbf1ed" />
      <ellipse cx="110" cy="158" rx="48" ry="5" fill="#ead8d2" />

      {type === "height" ? (
        <>
          <circle cx="94" cy="20" r="12" fill={`url(#skin-${type})`} />
          <path
            d="M82 19 Q82 3 95 7 Q106 8 106 21 L101 13 Q92 10 84 19Z"
            fill="#5b4142"
          />
          <path
            d="M85 34 L103 34 L114 74 L108 110 L112 153 L100 153 L94 116 L87 153 L75 153 L81 110 L76 74Z"
            fill={`url(#cloth-${type})`}
            stroke="#bd8b77"
          />
          <path d="M83 40 L66 75 L72 81 L88 57" fill={`url(#skin-${type})`} />
          <path d="M103 40 L121 75 L115 81 L100 57" fill={`url(#skin-${type})`} />
          <path
            d="M133 8 V154"
            stroke="#a8425e"
            strokeDasharray="3 3"
            strokeWidth="1.5"
          />
          <path
            d="M139 8 V154"
            stroke="#a8425e"
            strokeWidth="1.5"
            markerStart={`url(#arrow-${type})`}
            markerEnd={`url(#arrow-${type})`}
          />
          <text x="148" y="78" fill="#963b56" fontSize="10" fontWeight="700">
            Height
          </text>
          <text x="148" y="91" fill="#8b6b70" fontSize="8">
            Head to floor
          </text>
        </>
      ) : (
        <>
          <circle cx="110" cy="20" r="13" fill={`url(#skin-${type})`} />
          <path
            d="M97 20 Q94 4 110 5 Q126 6 124 24 L118 14 Q109 10 100 19Z"
            fill="#5b4142"
          />
          <path
            d="M103 31 L117 31 L119 39 L101 39Z"
            fill={`url(#skin-${type})`}
          />
          <path
            d="M98 38 Q110 43 122 38 L139 52 L130 77 L124 91 L135 119 L131 153 L119 153 L110 124 L101 153 L89 153 L85 119 L96 91 L90 77 L81 52Z"
            fill={`url(#cloth-${type})`}
            stroke="#9b5267"
            strokeWidth=".8"
          />
          <path
            d="M98 39 L82 49 L65 86 Q62 92 68 95 L73 92 L91 65"
            fill={`url(#skin-${type})`}
            stroke="#bd8b77"
          />
          <path
            d="M122 39 L138 49 L155 86 Q158 92 152 95 L147 92 L129 65"
            fill={`url(#skin-${type})`}
            stroke="#bd8b77"
          />

          {type === "bust" && (
            <>
              <path
                d="M77 63 Q94 56 110 65 Q126 56 143 63"
                fill="none"
                stroke="#c99b37"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M77 62 Q94 55 110 64 Q126 55 143 62"
                fill="none"
                stroke="#fff0b2"
                strokeWidth="1.3"
              />
              <text x="184" y="49" fill="#963b56" fontSize="10" fontWeight="700">
                Bust
              </text>
            </>
          )}

          {type === "waist" && (
            <>
              <path
                d="M91 91 Q110 97 129 91"
                fill="none"
                stroke="#c99b37"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M91 90 Q110 96 129 90"
                fill="none"
                stroke="#fff0b2"
                strokeWidth="1.3"
              />
              <text x="151" y="82" fill="#963b56" fontSize="9" fontWeight="700">
                Natural waist
              </text>
            </>
          )}

          {type === "hips" && (
            <>
              <path
                d="M84 112 Q110 124 136 112"
                fill="none"
                stroke="#c99b37"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M84 111 Q110 123 136 111"
                fill="none"
                stroke="#fff0b2"
                strokeWidth="1.3"
              />
              <text x="154" y="104" fill="#963b56" fontSize="9" fontWeight="700">
                Fullest hip
              </text>
            </>
          )}

          {type === "shoulder" && (
            <>
              <path
                d="M80 47 H140"
                stroke="#a8425e"
                strokeWidth="1.6"
                markerStart={`url(#arrow-${type})`}
                markerEnd={`url(#arrow-${type})`}
              />
              <text x="110" y="22" textAnchor="middle" fill="#963b56" fontSize="9" fontWeight="700">
                Shoulder width
              </text>
            </>
          )}

          {type === "torso" && (
            <>
              <path
                d="M151 42 V117"
                stroke="#a8425e"
                strokeWidth="1.6"
                markerStart={`url(#arrow-${type})`}
                markerEnd={`url(#arrow-${type})`}
              />
              <text x="159" y="77" fill="#963b56" fontSize="9" fontWeight="700">
                Torso length
              </text>
            </>
          )}

          {type === "inseam" && (
            <>
              <path
                d="M110 126 V153"
                stroke="#a8425e"
                strokeWidth="1.6"
                markerStart={`url(#arrow-${type})`}
                markerEnd={`url(#arrow-${type})`}
              />
              <text x="122" y="143" fill="#963b56" fontSize="9" fontWeight="700">
                Inseam
              </text>
            </>
          )}
        </>
      )}

      <text x="12" y="169" fill="#8f5361" fontSize="7.5">
        Guide only • keep tape level and snug
      </text>
    </svg>
  );
}

function getStyleRecommendations({ faceShape, bodyShape, preferences }) {
  const face = (faceShape || "").toLowerCase();
  const body = (bodyShape || "").toLowerCase();
  const hair = [];
  const outfits = [];
  const makeup = [];
  const colors = [];

  const aesthetic = preferences?.aesthetic || "";
  const occasion = preferences?.occasion || "";
  const hairPreference = preferences?.hair || "";
  const makeupPreference = preferences?.makeup || "Recommend for me";
  const colorPreference = preferences?.colors || "";
  const budget = preferences?.budget || "";

  // Hairstyle ideas
  if (face.includes("round") || face.includes("broad")) {
    hair.push("Try soft layers or side-swept framing to explore different looks.");
  } else if (face.includes("oblong")) {
    hair.push("Try soft waves, curtain bangs, or layers that add visual width.");
  } else if (face.includes("heart") || face.includes("tapered")) {
    hair.push("Explore face-framing layers or side-swept fringe.");
  } else if (face.includes("oval") || face.includes("balanced")) {
    hair.push("Experiment with soft layers, waves, or sleek styles.");
  } else {
    hair.push("Try different partings and styles to discover what you enjoy.");
  }

  if (hairPreference === "Short hair") {
    hair.push("For short hair, explore a textured bob or soft pixie.");
  } else if (hairPreference === "Medium hair") {
    hair.push("For medium hair, try shoulder-length layers or a lob.");
  } else if (hairPreference === "Long hair") {
    hair.push("For long hair, consider long layers or loose waves.");
  } else if (hairPreference === "Keep my current length") {
    hair.push("Keep your current length and experiment with styling or parting.");
  } else {
    hair.push("Choose a style that fits your preferred length and daily routine.");
  }

  // Outfit ideas
  if (preferences?.bodyProfile === "Skip") {
    outfits.push("Body analysis was skipped. Explore silhouettes based on your comfort and personal taste.");
  } else if (body.includes("pear") || body.includes("triangle")) {
    outfits.push("Try structured shoulders and balanced silhouettes if you like that look.");
  } else if (body.includes("hourglass")) {
    outfits.push("Explore wrap styles, defined waists, or tailored separates.");
  } else if (body.includes("rectangle") || body.includes("straight")) {
    outfits.push("Experiment with layering, belted pieces, or contrasting separates.");
  } else if (body.includes("inverted")) {
    outfits.push("Try relaxed lower-half silhouettes with balanced upper layers.");
  } else if (body && body !== "not available") {
    outfits.push("Explore well-fitting separates and proportions that feel comfortable.");
  } else {
    outfits.push("Start with well-fitting separates and silhouettes you enjoy wearing.");
  }

  if (occasion === "College / Work") {
    outfits.push("Try comfortable trousers, clean tops, and a light layering piece.");
  } else if (occasion === "Parties and events") {
    outfits.push("Pair one statement piece with a simple complementary outfit.");
  } else if (occasion === "Traditional / Ethnic wear") {
    outfits.push("Explore kurtas, coordinated sets, or traditional outfits you enjoy.");
  } else if (occasion === "Date nights") {
    outfits.push("Build around a favourite outfit and one special detail.");
  } else if (occasion === "All occasions") {
    outfits.push("Build a versatile wardrobe with pieces that work across occasions.");
  } else {
    outfits.push("Build a mix-and-match wardrobe around comfortable everyday basics.");
  }

  if (aesthetic === "Elegant / Old Money") {
    outfits.push("Explore clean tailoring and understated accessories.");
  } else if (aesthetic === "Soft / Romantic") {
    outfits.push("Try flowing fabrics, gentle textures, and delicate details.");
  } else if (aesthetic === "Minimalist") {
    outfits.push("Build a small mix-and-match wardrobe with simple lines.");
  } else if (aesthetic === "Edgy / Streetwear") {
    outfits.push("Experiment with relaxed layers, sneakers, and graphic accents.");
  } else if (aesthetic === "Coquette") {
    outfits.push("Explore bows, soft textures, and delicate accessories.");
  } else if (aesthetic === "Sporty") {
    outfits.push("Try practical layers, comfortable fabrics, and clean sneakers.");
  } else if (aesthetic === "Mix of aesthetics") {
    outfits.push("Combine elements from different aesthetics to create your own style.");
  } else {
    outfits.push("Try different aesthetics and keep the details that feel most like you.");
  }

  if (budget === "Affordable") {
    outfits.push("Budget tip: restyle existing basics and choose versatile pieces.");
  } else if (budget === "Mid-range") {
    outfits.push("Budget tip: invest selectively in versatile staples and accessories.");
  } else if (budget === "Premium") {
    outfits.push("Budget tip: focus on quality, fit, and pieces that work with your wardrobe.");
  } else if (budget === "No shopping links; use my existing wardrobe") {
    outfits.push("Wardrobe tip: create new combinations with clothes and accessories you already own.");
  }

  // Makeup ideas
  if (makeupPreference === "Natural") {
    makeup.push("Try softly defined brows and a lip shade you enjoy.");
  } else if (makeupPreference === "Soft glam") {
    makeup.push("Explore softly blended eyeshadow and subtle definition.");
  } else if (makeupPreference === "Full glam") {
    makeup.push("Experiment with a defined eye or a bold lip.");
  } else if (makeupPreference === "Minimal / no makeup") {
    makeup.push("Keep your routine minimal, or skip makeup if you prefer.");
  } else {
    makeup.push("Explore natural, soft-glam, or bold looks at your own pace.");
  }

  // Colour direction
  if (colorPreference === "Warm tones") {
    colors.push("Explore warm browns, terracotta, olive, and creamy neutrals.");
  } else if (colorPreference === "Cool tones") {
    colors.push("Explore berry, blue, lavender, and cool grey shades.");
  } else if (colorPreference === "Neutral tones") {
    colors.push("Explore beige, taupe, cream, grey, and muted earth tones.");
  } else if (colorPreference === "Bright colors") {
    colors.push("Try bright accent colours paired with a neutral base.");
  } else if (colorPreference === "Mostly black and white") {
    colors.push("Build outfits around black, white, grey, and contrasting textures.");
  } else {
    colors.push("Compare colours near your face in natural light and note which you prefer.");
  }

  return { hair, outfits, makeup, colors };
}

function StyleRecommendations({ analysis, bodyResult, preferences }) {
  const recommendations = getStyleRecommendations({
    faceShape: analysis?.estimated_face_shape,
    bodyShape: bodyResult?.body_shape,
    preferences,
  });

  const sections = [
    { title: "Hair ideas", icon: "✳", items: recommendations.hair },
    { title: "Outfit ideas", icon: "◇", items: recommendations.outfits },
    { title: "Makeup ideas", icon: "♡", items: recommendations.makeup },
    { title: "Colour direction", icon: "◉", items: recommendations.colors },
  ];

  return (
    <section className="results-section">
      <h3>Personalized style recommendations</h3>
      <p className="results-note">
        These rule-based styling ideas use your preferences and available
        estimates. They are suggestions to explore, not strict rules or
        scientifically validated assessments.
      </p>

      <div className="style-recommendation-grid">
        {sections.map((section) => (
          <article className="style-recommendation-card" key={section.title}>
            <span className="style-recommendation-icon">{section.icon}</span>
            <h4>{section.title}</h4>
            <ul>
              {section.items.map((item, index) => (
                <li key={`${section.title}-${index}`}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
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
  const faceShape = analysis?.estimated_face_shape || "Not available";
  const bodyShape =
    preferences?.bodyProfile === "Skip"
      ? "Skipped"
      : bodyResult?.body_shape || "Not available";

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
        <span className="results-eyebrow">YOUR STYLE TWIN PROFILE</span>
        <h2>Your results, at a glance.</h2>
        <p>Explore your analysis, body proportions, and personal style preferences.</p>
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
          <p>
            {preferences?.bodyProfile === "Skip"
              ? "No body measurements used"
              : "Measurement-based estimate"}
          </p>
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
          Face measurements are pixel estimates, not real-world measurements.
          Results can vary with photo angle and lighting.
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
          <p className="results-note">
            Measurements are shown in the unit selected on the measurement step.
          </p>
        </section>
      )}

      <section className="results-section">
        <h3>Your Style Twin matches</h3>

        {preferences?.bodyProfile === "Skip" ? (
          <p className="results-empty">
            Body analysis was skipped, so body-proportion matches are not available.
          </p>
        ) : celebrityMatches.length > 0 ? (
          <div className="results-match-list">
            {celebrityMatches.map((match, index) => (
              <article className="results-match" key={`${match.name}-${index}`}>
                <div className="results-rank">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="results-match-info">
                  <strong>{match.name}</strong>
                  <span>{match.body_shape_label || "Body proportions"}</span>
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
              Matches reflect the available body-proportion dataset; they are
              not facial lookalike scores.
            </p>
          </div>
        ) : (
          <p className="results-empty">
            No matches are available yet. Complete the measurement step to check
            whether body-proportion matches can be found.
          </p>
        )}
      </section>

      <StyleRecommendations
        analysis={analysis}
        bodyResult={bodyResult}
        preferences={preferences}
      />

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
    setPreferences((previous) => ({ ...previous, [field]: value }));
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
      setError(
        "Enter valid bust, waist, and hip measurements to estimate your body shape."
      );
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
      ...(cleanOptional.height_cm
        ? { height_cm: cleanOptional.height_cm }
        : {}),
      ...(cleanOptional.inseam_cm
        ? { inseam_cm: cleanOptional.inseam_cm }
        : {}),
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

      const response = await fetch("http://localhost:8000/analyze-face", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Unable to analyze this photo.");
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
        <span className="st-eyebrow">YOUR PERSONAL STYLE DISCOVERY</span>
        <h1>
          Discover the style
          <br />
          <span>that feels like you.</span>
        </h1>
        <p>
          Tell us what you love. We'll use your preferences and photo-based
          features to start building your personal style profile.
        </p>

        <div className="st-progress">
          <div
            className={
              !showMeasurementStep && !showPhotoStep
                ? "st-progress-active"
                : "st-progress-done"
            }
          >
            <span>1</span> Preferences
          </div>
          <div className="st-progress-line" />
          <div
            className={
              showMeasurementStep
                ? "st-progress-active"
                : showPhotoStep
                  ? "st-progress-done"
                  : ""
            }
          >
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
            <p>Choose what feels right. You can change your choices later.</p>
          </div>

          <form onSubmit={continueToPhotoStep}>
            <div className="st-field">
              <label htmlFor="ageGroup">Age group</label>
              <select
                id="ageGroup"
                value={preferences.ageGroup}
                onChange={(e) => updatePreference("ageGroup", e.target.value)}
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
                onChange={(e) => updatePreference("aesthetic", e.target.value)}
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
                  onChange={(e) => updatePreference("occasion", e.target.value)}
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
                  onChange={(e) => updatePreference("budget", e.target.value)}
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
                  onChange={(e) => updatePreference("hair", e.target.value)}
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
                  onChange={(e) => updatePreference("makeup", e.target.value)}
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
                onChange={(e) => updatePreference("colors", e.target.value)}
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
                onChange={(e) => updatePreference("bodyProfile", e.target.value)}
              >
                <option value="Measurement-based estimate">
                  Estimate body shape from measurements
                </option>
                <option value="Skip">Skip body analysis</option>
              </select>
              <small>
                Body-shape estimates use bust, waist, and hip measurements.
                Face-photo analysis is separate.
              </small>
            </div>

            {error && (
              <div className="st-error" role="alert">
                {error}
              </div>
            )}

            <button className="st-primary-button" type="submit">
              {preferences.bodyProfile === "Skip"
                ? "Continue to photo analysis"
                : "Continue to body measurements"}
              <span>→</span>
            </button>

            <p className="st-privacy-note">
              Your preferences are kept in this session only and are not saved
              between visits.
            </p>
          </form>
        </section>
      ) : showMeasurementStep ? (
        <section className="st-panel">
          <div className="st-panel-heading">
            <span className="st-section-number">02 / BODY MEASUREMENTS</span>
            <h2>Let's understand your proportions.</h2>
            <p>
              Follow the measuring guide, enter your measurements, and get an
              approximate body-shape estimate and body-proportion matches.
            </p>
          </div>

          <div className="st-measurement-intro">
            <strong>Before you begin</strong>
            <p>
              Use a flexible tape measure over light, fitted clothing. Keep the
              tape level and snug without pulling tightly. Choose cm or inches
              before entering values. Leave optional measurements blank if
              unknown.
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
              {[
                {
                  number: "01",
                  type: "bust",
                  title: "Bust",
                  description:
                    "Wrap the tape around the fullest part of the bust, keeping it horizontal across your back.",
                },
                {
                  number: "02",
                  type: "waist",
                  title: "Waist",
                  description:
                    "Measure around your natural waist, usually the narrowest part of your torso. Stand relaxed.",
                },
                {
                  number: "03",
                  type: "hips",
                  title: "Hips",
                  description:
                    "Measure around the fullest part of your hips and seat, keeping the tape level.",
                },
                {
                  number: "04",
                  type: "height",
                  title: "Height & proportions",
                  description:
                    "Stand straight for height. Torso length and inseam are optional refinements.",
                },
              ].map((guide) => (
                <article className="st-measure-guide" key={guide.type}>
                  <div className="st-guide-top">
                    <span className="st-guide-number">{guide.number}</span>
                    <MeasurementIllustration type={guide.type} />
                  </div>
                  <div className="st-guide-copy">
                    <h3>{guide.title}</h3>
                    <p>{guide.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="st-measurement-fields">
              {[
                {
                  key: "bust",
                  label: "Bust circumference",
                  required: true,
                  hint: "Around the fullest part of the bust.",
                },
                {
                  key: "waist",
                  label: "Waist circumference",
                  required: true,
                  hint: "Around your natural waist.",
                },
                {
                  key: "hips",
                  label: "Hip circumference",
                  required: true,
                  hint: "Around the fullest part of the hips and seat.",
                },
                {
                  key: "height",
                  label: "Height",
                  required: false,
                  hint: "Stand straight against a wall if measuring yourself.",
                },
                {
                  key: "shoulder",
                  label: "Shoulder width",
                  required: false,
                  hint: "Across the back between shoulder points; optional.",
                },
                {
                  key: "torso",
                  label: "Torso length",
                  required: false,
                  hint: "Use one consistent method if you know this measurement.",
                },
                {
                  key: "inseam",
                  label: "Inseam / leg length",
                  required: false,
                  hint: "From the crotch seam to the ankle, if known.",
                },
                {
                  key: "weight",
                  label: "Weight (kg)",
                  required: false,
                  hint: "Optional context only; not used to classify body shape.",
                },
              ].map((field) => (
                <div className="st-field" key={field.key}>
                  <label htmlFor={`measure-${field.key}`}>
                    {field.label}
                    <span className="st-required">
                      {field.required ? "Required" : "Optional"}
                    </span>
                  </label>
                  <input
                    id={`measure-${field.key}`}
                    className="st-measure-input"
                    type="number"
                    min="0.1"
                    step="any"
                    inputMode="decimal"
                    value={measurements[field.key]}
                    onChange={(event) =>
                      updateMeasurement(field.key, event.target.value)
                    }
                    required={field.required}
                    placeholder={
                      field.key === "weight"
                        ? "e.g. 58"
                        : measurementUnit === "cm"
                          ? "Enter cm"
                          : "Enter inches"
                    }
                  />
                  <small>{field.hint}</small>
                </div>
              ))}
            </div>

            {error && (
              <div className="st-error" role="alert">
                {error}
              </div>
            )}

            <button
              className="st-primary-button"
              type="submit"
              disabled={measurementLoading}
            >
              {measurementLoading
                ? "Calculating your profile..."
                : "Predict body shape & find matches"}
              {!measurementLoading && <span>→</span>}
            </button>
          </form>

          {bodyResult && (
            <div className="st-results st-body-results" aria-live="polite">
              <span className="st-section-number">YOUR BODY PROFILE</span>
              <h3>{bodyResult.body_shape}</h3>
              <p>{bodyResult.message}</p>
              <p className="st-result-caveat">
                This is an approximate styling estimate, not a definitive
                classification. Celebrity results compare available
                body-proportion ratios, not facial resemblance.
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
                {celebrityMatches.length > 0 ? (
                  <div className="st-match-list">
                    {celebrityMatches.map((match, index) => (
                      <article
                        className="st-match-card"
                        key={`${match.name}-${index}`}
                      >
                        <div className="st-match-rank">{index + 1}</div>
                        <div className="st-match-details">
                          <strong>{match.name}</strong>
                          <span>
                            {match.body_shape_label ||
                              "Body-shape label unavailable"}
                            {match.height_cm ? ` · ${match.height_cm} cm` : ""}
                          </span>
                          <small>
                            {match.compared_features} comparable proportion
                            features
                          </small>
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
                    No close matches could be calculated from the available
                    data. Add more verified celebrity measurements to improve
                    coverage.
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
              Upload a clear, front-facing face photo in good lighting. Your
              photo is sent to your local analysis server.
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

            {preview && (
              <span className="st-change-photo">Choose another photo</span>
            )}
          </label>

          {error && (
            <div className="st-error" role="alert">
              {error}
            </div>
          )}

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
          )}

          <button
            className="st-secondary-button"
            type="button"
            onClick={() => {
              setShowPhotoStep(false);
              if (preferences.bodyProfile !== "Skip") {
                setShowMeasurementStep(true);
              } else {
                setShowMeasurementStep(false);
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
