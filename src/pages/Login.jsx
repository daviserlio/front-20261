import { useState } from 'react';
import InputEmail from '../components/InputEmail/InputEmail';
import InputSenha from '../components/InputSenha/InputSenha';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [erroSenha, setErroSenha] = useState('');
  const [sucesso, setSucesso] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setErroEmail('');
    setErroSenha('');
    setSucesso(false);

    let valido = true;

    if (!email.trim()) {
      setErroEmail('O e-mail é obrigatório.');
      valido = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErroEmail('Informe um e-mail válido.');
      valido = false;
    }

    if (!senha) {
      setErroSenha('A senha é obrigatória.');
      valido = false;
    } else if (senha.length < 6) {
      setErroSenha('A senha deve ter no mínimo 6 caracteres.');
      valido = false;
    }

    if (valido) {
      setSucesso(true);
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <span className="login-logo-icon">🎓</span>
          </div>
          <h1 className="login-titulo">Aluno Online</h1>
          <p className="login-subtitulo">Entre com suas credenciais para continuar</p>
        </div>

        {sucesso && (
          <div className="login-sucesso" role="alert">
            ✅ Login realizado com sucesso!
          </div>
        )}

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <InputEmail
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            erro={erroEmail}
          />

          <InputSenha
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            erro={erroSenha}
          />

          <div className="login-esqueceu">
            <a href="#" className="login-link">Esqueceu a senha?</a>
          </div>

          <button type="submit" className="login-btn">
            Entrar
          </button>
        </form>

        <p className="login-rodape">
          Não tem uma conta?{' '}
          <a href="#" className="login-link">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
}

export default Login;