import { NavLink } from "react-router";

function Menu() {
  const linkClasses = ({ isActive }) =>
    `flex items-center font-bold before:content-['•'] before:mr-[15px] cursor-pointer ${
      isActive ? "text-blue-600" : "text-[#1a1a1a] hover:text-blue-600"
    }`;

  return (
    <nav className="hidden md:block">
      <ul className="list-none space-y-6">
        <li>
          <NavLink to="/" end className={linkClasses}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/notas" className={linkClasses}>
            Notas
          </NavLink>
        </li>
        <li>
          <NavLink to="/faltas" className={linkClasses}>
            Faltas
          </NavLink>
        </li>
        <li>
          <NavLink to="/boletos" className={linkClasses}>
            Boletos
          </NavLink>
        </li>
        <li>
          <NavLink to="/requerimentos" className={linkClasses}>
            Requerimentos
          </NavLink>
        </li>
        <li className="flex items-center font-bold text-red-600 cursor-pointer before:content-['•'] before:mr-[15px] hover:text-red-800">
          Sair
        </li>
      </ul>
    </nav>
  );
}

export default Menu;