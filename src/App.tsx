import { Header } from "./components/ui/Header";
import './App.css';

export function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="main-content">
        <h2>Bienvenido a la 3ª Carrera Cruz Azul Guadalajara 2026</h2>
        <p>Selecciona una sección en la navegación superior para explorar los detalles del evento.</p>
      </main>
    </div>
  );
}

export default App;