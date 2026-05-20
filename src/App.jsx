import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Notas from "./pages/Notas";
import Faltas from "./pages/Faltas";
import Boletos from "./pages/Boletos";
import Requirementos from "./pages/Requirementos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="notas" element={<Notas />} />
        <Route path="faltas" element={<Faltas />} />
        <Route path="boletos" element={<Boletos />} />
        <Route path="requerimentos" element={<Requirementos />} />
      </Route>
    </Routes>
  );
}

export default App;