import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Notas() {
  return (
    <section className="flex min-h-screen w-full bg-[#fafafa]">
      <Sidebar />
      <main className="flex-1 p-6 md:p-10 bg-white min-h-screen">
        <Topbar />
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Minhas Notas</h2>
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-10">
          Histórico de Notas por Semestre
        </p>

        <article className="border border-[#ccc] rounded-xl overflow-hidden p-2.5 bg-white mb-8">
          <header className="bg-[#e6e6e6] px-5 py-[15px] mb-[15px] -mx-2.5 -mt-2.5 font-bold text-lg">
            2026.1
          </header>
          <section className="overflow-x-auto px-2.5 pb-2.5">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="border-b border-[#ccc] font-bold">
                  <th className="p-4 text-left">Disciplina</th>
                  <th className="p-4">A1</th>
                  <th className="p-4">A2</th>
                  <th className="p-4">A3</th>
                  <th className="p-4">Menção</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#eee]">
                  <td className="p-4 text-left">BI e Data Warehousing</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="font-bold">SR</td>
                </tr>
                <tr className="border-b border-[#eee]">
                  <td className="p-4 text-left">Construção de Frontend</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="font-bold">SR</td>
                </tr>
                <tr className="border-b border-[#eee]">
                  <td className="p-4 text-left">
                    Manutenção de Software e Devops
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="font-bold">SR</td>
                </tr>
              </tbody>
            </table>
          </section>
        </article>
      </main>
    </section>
  );
}

export default Notas;