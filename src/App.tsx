import { Header } from "./components/ui/Header";
import { Hero } from "./components/ui/Hero";
import { EventOverview } from "./components/ui/EventOverview";
import './App.css';

export function App() {
  return (
    <div className="app-shell">
      <Header />
      <Hero eventDateIso="2026-11-15T07:00:00"/>
      <EventOverview />
      <main className="main-content">
        <h2>Bienvenido a la 3ª Carrera Cruz Azul Guadalajara 2026</h2>
        <p>Selecciona una sección en la navegación superior para explorar los detalles del evento.</p>
      </main>
    </div>
  );
}

export default App;