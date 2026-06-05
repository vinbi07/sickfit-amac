const SICKFIT_SOCIAL_URL = "https://linktr.ee/sickfitofficial";

function renderStepText(step) {
  const parts = step.split("@sickfitofficial");

  return parts.flatMap((part, index) => {
    if (index === parts.length - 1) return part;

    return [
      part,
      <a href={SICKFIT_SOCIAL_URL} target="_blank" rel="noreferrer" key={`${part}-${index}`}>
        @sickfitofficial
      </a>,
    ];
  });
}

export default function ConferenceOffer({ offerSteps }) {
  return (
    <section className="amac-section">
      <div className="amac-container">
        <div className="amac-offer-panel">
          <p className="amac-section-label">Exclusive Conference Offer · First 50 Attendees</p>
          <div className="amac-offer-grid">
            <div>
              <h2>Earn your pair. Feel the difference first.</h2>
              <p className="amac-offer-note">
                First 50 attendees only. One conference. Two visits. One pair earned.
              </p>
            </div>
            <ol className="amac-offer-steps">
              {offerSteps.map((step, index) => (
                <li key={step}>
                  <span>{index + 1}</span>
                  <p>{renderStepText(step)}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
