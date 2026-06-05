import CitySockCard from "./CitySockCard.jsx";

export default function CitySockShowcase({ cityCards }) {
  return (
    <section className="amac-section" id="city-socks">
      <div className="amac-container">
        <div className="amac-section-heading">
          <p className="amac-section-label">Location-Exclusive Designs</p>
          <h2>Every airport gets its own sock.</h2>
          <p>
            Custom state and city-specific performance socks built for airport retail,
            destination shops, travelers, and the teams who keep terminals moving.
          </p>
        </div>
        <div className="amac-city-grid">
          {cityCards.map((card) => (
            <CitySockCard key={card.airport} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
