function Card(props) {
  return (
    <article className={`border border-[#ccc] rounded-xl overflow-hidden bg-white flex flex-col ${props.span ? "col-span-1 md:col-span-2" : "col-span-1"}`}>
      
      <h3 className="bg-[#e6e6e6] px-5 py-4 border-b border-[#ccc] font-bold text-lg text-[#1a1a1a]">
        {props.titulo}
      </h3>
      
      <ul className="p-5 flex-1 text-[#1a1a1a] space-y-2">
        {props.itens?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
    </article>
  );
}

export default Card;