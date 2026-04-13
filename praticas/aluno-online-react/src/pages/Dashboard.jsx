import Card from "../components/Card";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <section className="flex min-h-screen w-full bg-[#fafafa]">
      <Sidebar />
      <Main titulo="Olá, Aluno!" subtitulo="Bem-vindo ao portal do aluno">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[30px]">
          
          <Card 
            titulo="Mural de Avisos"
            itens={[
              "Inscrição para o projeto de extensão",
              "Eleição para representante da turma"
            ]}
          />
          
          <Card 
            titulo="Minhas Disciplinas"
            itens={[
              "BI e Data Warehousing",
              "Construção de Frontend",
              "Manutenção de Software e Devops"
            ]}
          />
          
          <Card 
            titulo="Calendário Acadêmico"
            span={true}
            itens={[
              "23/02 - Início do período letivo 2026-1",
              "25/04 - Prazo final para aplicação da P1",
              "23/06 - Prazo final para aplicação da P2",
              "04/07 - Fim do período letivo 2026-1"
            ]}
          />
          
        </section>
      </Main>
    </section>
  );
}

export default Dashboard;