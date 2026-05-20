function Menu() {
  return (
    <nav className="hidden md:block">
      <ul className="list-none space-y-6">
        <li className="flex items-center font-bold text-[#1a1a1a] before:content-['•'] before:mr-[15px] cursor-pointer hover:text-blue-600">Dashboard</li>
        <li className="flex items-center font-bold text-[#1a1a1a] before:content-['•'] before:mr-[15px] cursor-pointer hover:text-blue-600">Notas</li>
        <li className="flex items-center font-bold text-[#1a1a1a] before:content-['•'] before:mr-[15px] cursor-pointer hover:text-blue-600">Faltas</li>
        <li className="flex items-center font-bold text-[#1a1a1a] before:content-['•'] before:mr-[15px] cursor-pointer hover:text-blue-600">Boletos</li>
        <li className="flex items-center font-bold text-[#1a1a1a] before:content-['•'] before:mr-[15px] cursor-pointer hover:text-blue-600">Requerimentos</li>
        <li className="flex items-center font-bold text-red-600 cursor-pointer before:content-['•'] before:mr-[15px] hover:text-red-800">Sair</li>
      </ul>
    </nav>
  );
}

export default Menu;