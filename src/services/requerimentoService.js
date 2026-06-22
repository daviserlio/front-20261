import { obterToken } from "./authService";
import { useAuth } from "../contexts/AuthContext";

const BASE_URL = "http://localhost:3000/requerimentos";

function obterHeaders() {
  const token = obterToken();
  const headers = { "Content-Type": "application/json" };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}

export async function listarRequerimentos() {
  const response = await fetch(BASE_URL, {
    headers: obterHeaders(),
  });
  
  if (response.status === 401) {
    throw new Error("Sessão expirada. Faça login novamente.");
  }
  
  return response.json();
}

export async function cadastrarRequerimento(dados) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: obterHeaders(),
    body: JSON.stringify(dados),
  });
  
  if (response.status === 401) {
    throw new Error("Sessão expirada. Faça login novamente.");
  }
  
  return response.json();
}