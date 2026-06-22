import { createContext, useContext, useState, useEffect } from "react";
import { obterDadosAuth, logout as logoutService } from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const dados = obterDadosAuth();
    if (dados) {
      setUsuario(dados.usuario);
      setAutenticado(true);
    }
    setCarregando(false);
  }, []);

  function login(dados) {
    setUsuario(dados.usuario);
    setAutenticado(true);
  }

  function logout() {
    logoutService();
    setUsuario(null);
    setAutenticado(false);
  }

  if (carregando) {
    return <div>Carregando...</div>;
  }

  return (
    <AuthContext.Provider value={{ autenticado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}