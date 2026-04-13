import logo from "../assets/learn.svg";
import Menu from "./Menu";

function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-[320px] bg-[#ededed] p-10 flex-col flex-shrink-0 min-h-screen">
      <header className="flex items-center gap-[15px] mb-[50px]">
        <img src={logo} alt="Logotipo Aluno Online" className="w-10 object-contain" />
        <h1 className="text-2xl font-bold text-[#1a1a1a]">Aluno Online</h1>
      </header>
      <Menu />
    </aside>
  );
}

export default Sidebar;