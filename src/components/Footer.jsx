import sickfitLogo from "../public/assets/SickFit Logo.png";

export default function Footer() {
  return (
    <footer className="amac-footer">
      <div className="amac-container amac-footer-grid">
        <div>
          <a className="amac-wordmark" href="#top">
            <img src={sickfitLogo} alt="SickFit" />
          </a>
          <p><strong>Performance. Compression. Recovery.</strong></p>
          <p>
            <a href="mailto:sales@sickfitofficial.com">sales@sickfitofficial.com</a>
            <span> - </span>
            <a href="https://sickfitofficial.com">sickfitofficial.com</a>
            <span> - </span>
            <a href="https://linktr.ee/sickfitofficial" target="_blank" rel="noreferrer">
              @sickfitofficial
            </a>
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
