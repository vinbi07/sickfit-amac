export default function StatsSection({ stats }) {
  return (
    <section className="amac-section amac-stats-section">
      <div className="amac-container">
        <div className="amac-section-heading">
          <p className="amac-section-label">Why SickFit Wins</p>
          <h2>The receipts</h2>
        </div>
        <div className="amac-stats-grid">
          {stats.map((stat) => (
            <article className="amac-stat-card" key={stat.value}>
              <strong>{stat.value}</strong>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
