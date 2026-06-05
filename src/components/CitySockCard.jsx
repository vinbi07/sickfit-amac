import dallasSockImage from "../public/assets/Dallas Sock.jpg";

export default function CitySockCard({
  city,
  market,
  airport,
  label,
  imageSrc = dallasSockImage,
  imagePosition = "center",
}) {
  return (
    <article className="amac-card amac-city-card">
      <div className="amac-city-image">
        <img src={imageSrc} alt={label} style={{ objectPosition: imagePosition }} />
      </div>
      <div className="amac-city-body">
        <p className="amac-section-label">Location exclusive</p>
        <h3>{city}</h3>
        <p>
          {market} · {airport}
        </p>
      </div>
    </article>
  );
}
