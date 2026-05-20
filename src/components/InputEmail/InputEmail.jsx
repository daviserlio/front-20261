import './InputEmail.css';

function InputEmail({ value, onChange, erro }) {
  return (
    <div className="input-grupo">
      <label htmlFor="email" className="input-label">
        E-mail
      </label>
      <input
        id="email"
        type="email"
        className={`input-campo ${erro ? 'input-campo--erro' : ''}`}
        placeholder="seu@email.com"
        value={value}
        onChange={onChange}
        autoComplete="email"
      />
      {erro && <span className="input-erro">{erro}</span>}
    </div>
  );
}

export default InputEmail;