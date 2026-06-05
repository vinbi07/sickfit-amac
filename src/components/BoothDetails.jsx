export default function BoothDetails() {
  return (
    <section className="amac-section" id="booth">
      <div className="amac-container">
        <div className="amac-section-heading">
          <p className="amac-section-label">Find Us at the Conference</p>
          <h2>Booth 114 · Experience Hall</h2>
        </div>
        <div className="amac-booth-grid">
          <div className="amac-booth-number-card">
            <p>Booth</p>
            <strong>114</strong>
            <span>Experience Hall</span>
          </div>
          <div className="amac-card amac-booth-details-card">
            <p className="amac-section-label">SickFit at AMAC 2026</p>
            <ul>
              <li>41st Annual AMAC Airport Business Conference</li>
              <li>Gaylord National Resort</li>
              <li>National Harbor, MD</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
