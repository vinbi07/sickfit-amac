import sickfitLogo from "../public/assets/SickFit Logo.png";

export default function Footer() {
  return (
    <footer className="amac-footer">
      <div className="amac-container amac-footer-grid">
        <div>
          <a className="amac-wordmark" href="#top">
            <img src={sickfitLogo} alt="SickFit" />
          </a>
          <p>Performance. Compression. Recovery.</p>
          <p>
            <a href="mailto:psickles@sickfitofficial.com">psickles@sickfitofficial.com</a>
            <span> / </span>
            <a href="https://sickfitofficial.com">sickfitofficial.com</a>
            <span> / @sickfitofficial</span>
          </p>
        </div>
        <div className="amac-footer-actions">
          <a className="amac-button" href="#request-airport">
            Request Your Airport
          </a>
        </div>
      </div>
    </footer>
  );
}
