import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";
import Main from "../components/Main";

function Faltas() {
  return (
    <section className="flex min-h-screen w-full bg-[#fafafa]">
      <Sidebar />
      <Main titulo="Minhas Faltas" subtitulo="Histórico de Faltas por Semestre">
        
        <Tabela 
          titulo="2026.1" 
          colunas={["Disciplina", "Total de Faltas", "% de Presença"]}
          linhas={[
            ["BI e Data Warehousing", "0", "100%"],
            ["Construção de Frontend", "0", "100%"],
            ["Manutenção de Software e Devops", "0", "100%"]
          ]}
        />

        <Tabela 
          titulo="2025.2" 
          colunas={["Disciplina", "Total de Faltas", "% de Presença"]}
          linhas={[
            ["Construção de Backend", "27", "87.5%"],
            ["Estrutura de Dados", "9", "85%"],
            ["Gerenciamento de Projetos", "10.5", "82.5%"]
          ]}
        />

      </Main>
    </section>
  );
}

export default Faltas;