import { useState } from 'react';
import './InputSenha.css';

function InputSenha({ value, onChange, erro }) {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <div className="input-grupo">
      <label htmlFor="senha" className="input-label">
        Senha
      </label>
      <div className="input-wrapper">
        <input
          id="senha"
          type={mostrarSenha ? 'text' : 'password'}
          className={`input-campo ${erro ? 'input-campo--erro' : ''}`}
          placeholder="Mínimo 6 caracteres"
          value={value}
          onChange={onChange}
          autoComplete="current-password"
        />
        <button
          type="button"
          className="input-toggle"
          onClick={() => setMostrarSenha((prev) => !prev)}
          aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
        >
          {mostrarSenha ? '🙈' : '👁'}
        </button>
      </div>
      {erro && <span className="input-erro">{erro}</span>}
    </div>
  );
}

export default InputSenha;