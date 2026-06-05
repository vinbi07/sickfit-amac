export default function Hero() {
  return (
    <section className="amac-hero" id="top">
      <div className="amac-container amac-hero-grid">
        <div className="amac-hero-copy">
          <p className="amac-section-label">AMAC 2026 · National Harbor, MD</p>
          <h1>
            We make a sock
            <span>for your city.</span>
          </h1>
          <p className="amac-hero-text">
            SickFit makes state-specific, location-exclusive performance compression socks
            for airport retail, engineered for the traveler walking your terminals and the
            workforce on their feet all day.
          </p>
          <div className="amac-hero-meta">Booth 114 · Experience Hall</div>
          <div className="amac-hero-actions">
            <a className="amac-button" href="#request-airport">
              Request Your Airport
            </a>
          </div>
        </div>

        <aside className="amac-hero-card" aria-label="SickFit AMAC booth details">
          <div className="amac-hero-card-top">
            <div>
              <p>Booth</p>
              <strong>114</strong>
            </div>
            <span>AMAC 2026</span>
          </div>
          <div className="amac-hero-card-divider" aria-hidden="true" />
          <div className="amac-hero-card-bottom">
            <span>Experience Hall</span>
            <span>National Harbor, MD</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
