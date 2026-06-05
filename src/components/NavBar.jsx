import sickfitLogo from "../public/assets/SickFit Logo.png";

export default function NavBar({ navLinks }) {
  return (
    <header className="amac-nav">
      <nav className="amac-container amac-nav-inner" aria-label="Primary navigation">
        <a className="amac-wordmark" href="#top" aria-label="SickFit AMAC home">
          <img src={sickfitLogo} alt="SickFit" />
        </a>
        <span className="amac-nav-badge">AMAC 2026</span>
        <div className="amac-nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a className="amac-button amac-nav-cta" href="#request-airport">
          Request Your Airport
        </a>
      </nav>
    </header>
  );
}
