import avatar from "../assets/avatar.svg";

function Topbar() {
  return (
    <header className="flex items-start justify-between mb-10 md:mb-16">
      <hgroup>
        <h2 className="text-3xl md:text-[2.8rem] font-bold leading-tight mb-2">Olá, Aluno!</h2>
        <p className="text-lg md:text-[1.6rem] font-bold text-gray-600">Bem-vindo ao portal do aluno</p>
      </hgroup>
      <img src={avatar} alt="Avatar do usuário" className="w-12 h-12 md:w-[60px] md:h-[60px] rounded-full object-cover border border-gray-200 shadow-sm" />
    </header>
  );
}

export default Topbar;