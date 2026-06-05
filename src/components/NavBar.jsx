import { useState } from "react";
import sickfitLogo from "../public/assets/SickFit Logo.png";

export default function NavBar({ navLinks }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`amac-nav ${isMenuOpen ? "is-open" : ""}`}>
      <nav className="amac-container amac-nav-inner" aria-label="Primary navigation">
        <a className="amac-wordmark" href="#top" aria-label="SickFit AMAC home">
          <img src={sickfitLogo} alt="SickFit" />
        </a>
        <span className="amac-nav-badge">AMAC 2026</span>
        <button
          className="amac-nav-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="amac-mobile-menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
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
        <div className="amac-mobile-menu" id="amac-mobile-menu">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="amac-button" href="#request-airport" onClick={() => setIsMenuOpen(false)}>
            Request Your Airport
          </a>
        </div>
      </nav>
    </header>
  );
}
