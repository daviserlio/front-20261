import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Requerimentos() {
  return (
    <section className="flex min-h-screen w-full bg-[#fafafa]">
      <Sidebar />
      <main className="flex-1 p-6 md:p-10 bg-white min-h-screen">
        <Topbar />
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Meus Requerimentos
        </h2>
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-10">
          Faça solicitações online para a secretaria
        </p>

        <article className="border border-[#ccc] rounded-xl overflow-hidden p-2.5 bg-white">
          <header className="bg-[#e6e6e6] px-5 py-[15px] mb-[15px] -mx-2.5 -mt-2.5 font-bold text-lg text-center">
            Lista de Requerimentos
          </header>
          <section className="overflow-x-auto px-2.5 pb-2.5">
            <table className="w-full text-center">
              <thead>
                <tr className="border-b border-[#ccc] font-bold">
                  <th className="p-4 text-left">Tipo de Requerimento</th>
                  <th className="p-4">Data de Solicitação</th>
                  <th className="p-4">Situação</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#eee]">
                  <td className="p-4 text-left">Revisão de Menção</td>
                  <td>15/12/2025</td>
                  <td>Indeferido</td>
                </tr>
                <tr className="border-b border-[#eee]">
                  <td className="p-4 text-left">Dispensa de Disciplina</td>
                  <td>12/06/2025</td>
                  <td>Indeferido</td>
                </tr>
                <tr className="border-b border-[#eee]">
                  <td className="p-4 text-left">Trancamento de Matrícula</td>
                  <td>05/01/2024</td>
                  <td>Deferido</td>
                </tr>
              </tbody>
            </table>
          </section>
        </article>
      </main>
    </section>
  );
}

export default Requerimentos;