import { Routes, Route, Navigate } from "react-router";
import { useAuth } from "./contexts/AuthContext";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Notas from "./pages/Notas";
import Faltas from "./pages/Faltas";
import Boletos from "./pages/Boletos";
import Requirementos from "./pages/Requirementos";

function App() {
  const { autenticado } = useAuth();

  if (!autenticado) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="notas" element={<Notas />} />
        <Route path="faltas" element={<Faltas />} />
        <Route path="boletos" element={<Boletos />} />
        <Route path="requerimentos" element={<Requirementos />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;