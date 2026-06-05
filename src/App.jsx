import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import CitySockShowcase from "./components/CitySockShowcase.jsx";
import KlaviyoLeadForm from "./components/KlaviyoLeadForm.jsx";
import BoothDetails from "./components/BoothDetails.jsx";
import StatsSection from "./components/StatsSection.jsx";
import ConferenceOffer from "./components/ConferenceOffer.jsx";
import CertificationBadges from "./components/CertificationBadges.jsx";
import Footer from "./components/Footer.jsx";
import georgiaSockImage from "./public/assets/GeorgiaSock.jpeg";
import utahSockImage from "./public/assets/UtahSock.png";

const navLinks = [
  { label: "City Socks", href: "#city-socks" },
  { label: "Request Airport", href: "#request-airport" },
  { label: "Booth 114", href: "#booth" },
];

const cityCards = [
  {
    city: "Dallas",
    market: "Texas",
    airport: "DFW",
    label: "Dallas sock photo",
    imagePosition: "80% center",
  },
  {
    city: "Utah",
    market: "Salt Lake City",
    airport: "SLC",
    label: "Utah sock photo",
    imageSrc: utahSockImage,
    imagePosition: "45% 56%",
  },
  {
    city: "Georgia",
    market: "Atlanta",
    airport: "ATL",
    label: "Georgia sock photo",
    imageSrc: georgiaSockImage,
    imagePosition: "50% center",
  },
];

const stats = [
  { value: "150,000+", label: "Pairs Sold" },
  { value: "30+", label: "Sold in 30+ States" },
  { value: "300+", label: "pairs sold in 30 min" },
];

const offerSteps = [
  "Stop by Booth 114 early in the day. Pick up your left sock and put it on. Wear it through every session, every walk, every conversation.",
  "Come back at the end of the conference. Leave a quick honest video review and post it tagging @sickfitofficial.",
  "We hand you the right sock and a full bonus pair on us. Your feet earned it.",
];

const certificationBadges = [
  "WBENC Certified",
  "NaVOBA Certified",
  "NMSDC Certified",
  "SBA SDVOB",
  "Goldman Sachs 10KSB",
  "Veteran-Owned",
  "Woman-Owned",
];

export default function App() {
  return (
    <div className="amac-page">
      <NavBar navLinks={navLinks} />
      <main>
        <Hero />
        <CitySockShowcase cityCards={cityCards} />
        <KlaviyoLeadForm />
        <BoothDetails />
        <StatsSection stats={stats} />
        <ConferenceOffer offerSteps={offerSteps} />
        <CertificationBadges badges={certificationBadges} />
      </main>
      <Footer />
    </div>
  );
}
