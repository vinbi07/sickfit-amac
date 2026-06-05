const KLAVIYO_REQUEST_AIRPORT_FORM_ID =
  import.meta.env.VITE_KLAVIYO_REQUEST_AIRPORT_FORM_ID || "VDXmKf";
const KLAVIYO_COMPANY_ID = import.meta.env.VITE_KLAVIYO_COMPANY_ID || "";

let klaviyoScriptPromise;

function getExistingKlaviyoScript() {
  return document.querySelector('script[src*="static.klaviyo.com/onsite/js/klaviyo.js"]');
}

function loadKlaviyoScript() {
  if (!KLAVIYO_COMPANY_ID) return Promise.resolve();
  if (klaviyoScriptPromise) return klaviyoScriptPromise;

  const existingScript = getExistingKlaviyoScript();
  if (existingScript) {
    klaviyoScriptPromise = new Promise((resolve, reject) => {
      existingScript.addEventListener("load", resolve, { once: true });
      existingScript.addEventListener("error", reject, { once: true });
      setTimeout(resolve, 1200);
    });

    return klaviyoScriptPromise;
  }

  klaviyoScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${KLAVIYO_COMPANY_ID}`;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });

  return klaviyoScriptPromise;
}

async function openKlaviyoPopup() {
  try {
    await loadKlaviyoScript();
    window._klOnsite = window._klOnsite || [];
    window._klOnsite.push(["openForm", KLAVIYO_REQUEST_AIRPORT_FORM_ID]);
  } catch {
    console.warn("Klaviyo onsite script failed to load.");
  }
}

export default function KlaviyoLeadForm() {
  return (
    <section className="amac-section amac-request-section" id="request-airport">
      <div className="amac-container amac-request-content">
        <div className="amac-request-copy">
          <p className="amac-section-label">Request Your Airport</p>
          <h2>Bring SickFit to your airport retail program.</h2>
          <p>
            Tell us your airport, city, or organization and we'll follow up about
            location-exclusive compression sock opportunities.
          </p>
          <div className="amac-proof-list" aria-label="Example requested airports">
            <span>Chicago · ORD</span>
            <span>Denver · DEN</span>
            <span>Miami · MIA</span>
            <span>New York · JFK</span>
            <span>Los Angeles · LAX</span>
          </div>
          <button
            className="amac-button amac-request-button"
            type="button"
            onClick={openKlaviyoPopup}
          >
            Request an Airport
          </button>
        </div>
      </div>
    </section>
  );
}
