function Card() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[30px]">
      <article className="border border-[#ccc] rounded-xl overflow-hidden p-2.5 bg-white">
        <header className="bg-[#e6e6e6] px-5 py-[15px] mb-[15px] -mx-2.5 -mt-2.5">
          <h3 className="font-bold text-lg">Mural de Avisos</h3>
        </header>
        <section className="px-2.5 pb-2.5 space-y-1">
          <p>Inscrição para o projeto de extensão</p>
          <p>Eleição para representante de turma</p>
        </section>
      </article>

      <article className="border border-[#ccc] rounded-xl overflow-hidden p-2.5 bg-white">
        <header className="bg-[#e6e6e6] px-5 py-[15px] mb-[15px] -mx-2.5 -mt-2.5">
          <h3 className="font-bold text-lg">Minhas Disciplinas</h3>
        </header>
        <section className="px-2.5 pb-2.5 space-y-1">
          <p>BI e Data Warehousing</p>
          <p>Construção de Frontend</p>
          <p>Manutenção de Software e Devops</p>
        </section>
      </article>

      <article className="border border-[#ccc] rounded-xl overflow-hidden p-2.5 bg-white col-span-1 md:col-span-2">
        <header className="bg-[#e6e6e6] px-5 py-[15px] mb-[15px] -mx-2.5 -mt-2.5">
          <h3 className="font-bold text-lg">Calendário Acadêmico</h3>
        </header>
        <section className="px-2.5 pb-2.5 space-y-2">
          <p><strong className="font-bold text-black">23/02</strong> - Início do período letivo 2026-1</p>
          <p><strong className="font-bold text-black">25/04</strong> - Prazo final para aplicação da P1</p>
          <p><strong className="font-bold text-black">23/06</strong> - Prazo final para aplicação da P2</p>
          <p><strong className="font-bold text-black">04/07</strong> - Fim do período letivo 2026-1</p>
        </section>
      </article>
    </section>
  );
}

export default Card;