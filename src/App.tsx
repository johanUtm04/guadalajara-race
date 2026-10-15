import { Header } from "./components/ui/Header";
import { Hero } from "./components/ui/Hero";
import { EventOverview } from "./components/ui/EventOverview";
import { RunnerKit } from "./components/RunnerKit/RunnerKit";
import { LocationSection } from "./components/LocationSection/LocationSection";
import { SocialCauseSection } from "./components/SocialCauseSection/SocialCauseSection";
import { PrizesSection } from "./components/PrizesSection/PrizesSection";
import { SponsorsTable } from "./components/SponsorsTable/SponsorsTable";
import { Footer } from './components/Footer/Footer';

import logoCruzAzul from './assets/header/logo-cruz-azul.png';
import './App.css';

export function App() {
  return (
    <div className="app-shell">
      <Header logoUrl={logoCruzAzul} logoAlt="Cemento Cruz Azul Logo" />
      <div id="inicio">
        <Hero eventDateIso="2026-11-15T07:00:00" />
      </div>
      <EventOverview />
      <RunnerKit />
      <LocationSection />
      <SocialCauseSection />
      <PrizesSection />
      <SponsorsTable />
      <Footer />
    </div>
  );
}

export default App;
