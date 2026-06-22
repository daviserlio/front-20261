const BASE_URL = "http://localhost:3000/usuarios";

function gerarToken() {
  return btoa(JSON.stringify({ exp: Date.now() + 3600000 }));
}

export async function login(email, senha) {
  const usuarios = await fetch(BASE_URL).then(r => r.json());
  const usuario = usuarios.find(u => u.email === email && u.senha === senha);
  
  if (!usuario) {
    throw new Error("E-mail ou senha inválidos.");
  }

  const token = gerarToken();
  const dados = { usuario: { id: usuario.id, email: usuario.email }, token };
  
  localStorage.setItem("auth", JSON.stringify(dados));
  return dados;
}

export function logout() {
  localStorage.removeItem("auth");
}

export function obterDadosAuth() {
  const auth = localStorage.getItem("auth");
  return auth ? JSON.parse(auth) : null;
}

export function obterToken() {
  const auth = obterDadosAuth();
  return auth?.token || null;
}