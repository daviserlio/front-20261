import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Tabela from "../components/Tabela";

function Requerimentos() {
  return (
    <section className="flex min-h-screen w-full bg-[#fafafa]">
      <Sidebar />
      <Main titulo="Meus Requerimentos" subtitulo="Faça solicitações online para a secretaria">
        <Tabela 
          colunas={["Tipo de Requerimento", "Data de Solicitação", "Situação"]}
          linhas={[
            ["Revisão de Menção", "15/12/2025", "Indeferido"],
            ["Dispensa de Disciplina", "12/06/2025", "Indeferido"],
            ["Trancamento de Matrícula", "05/01/2024", "Deferido"],
            ["Mudança de Turno", "10/10/2023", "Deferido"]
          ]}
        />
      </Main>
    </section>
  );
}

export default Requerimentos;