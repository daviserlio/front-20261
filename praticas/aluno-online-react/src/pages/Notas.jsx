import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";

function Notas() {
  return (
    <section className="flex min-h-screen w-full bg-[#fafafa]">
      <Sidebar />
      <Main titulo="Minhas Notas" subtitulo="Histórico de Notas por Semestre">

        <Tabela
          titulo="2026.1"
          colunas={["Disciplina", "A1", "A2", "A3", "Menção"]}
          linhas={[
            ["BI e Data Warehousing", "6.2", "7.1", "", "SR"],
            ["Construção de Frontend", "5.4", "6.1", "", "SR"],
            ["Manutenção de Software e Devops", "7.3", "7.1", "", "SR"]
          ]}
        />

        <Tabela
          titulo="2025.2"
          colunas={["Disciplina", "A1", "A2", "A3", "Menção"]}
          linhas={[
            ["Construção de Backend", "5.4", "6.2", "", "MM"],
            ["Estrutura de Dados", "6.3", "6.1", "", "MM"],
            ["Gerenciamento de Projetos", "7.4", "7.1", "", "MS"]
          ]}
        />

      </Main>
    </section>
  );
}

export default Notas;