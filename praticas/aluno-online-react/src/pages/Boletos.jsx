import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Tabela from "../components/Tabela";

function Boletos() {
  return (
    <section className="flex min-h-screen w-full bg-[#fafafa]">
      <Sidebar />
      <Main titulo="Meus Boletos" subtitulo="Histórico de Pagamentos">
        <Tabela 
          colunas={["Vencimento", "Valor R$", "Situação"]}
          linhas={[
            ["19/01/2026", "500,00", "Pago"],
            ["19/02/2026", "500,00", "Em atraso"],
            ["19/03/2026", "500,00", "A Pagar"],
            ["19/04/2026", "500,00", "A Pagar"]
          ]}
        />
      </Main>
    </section>
  );
}

export default Boletos;