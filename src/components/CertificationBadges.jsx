export default function CertificationBadges({ badges }) {
  return (
    <section className="amac-section amac-badges-section" aria-label="SickFit certifications">
      <div className="amac-container">
        <div className="amac-badge-list">
          {badges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
