import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Boletos() {
  return (
    <section className="flex min-h-screen w-full bg-[#fafafa]">
      <Sidebar />
      <main className="flex-1 p-6 md:p-10 bg-white min-h-screen">
        <Topbar />
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Meus Boletos</h2>
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-10">
          Histórico de Pagamentos
        </p>

        <article className="border border-[#ccc] rounded-xl overflow-hidden p-2.5 bg-white">
          <header className="bg-[#e6e6e6] px-5 py-[15px] mb-[15px] -mx-2.5 -mt-2.5 font-bold text-lg text-center">
            Histórico de Pagamentos
          </header>
          <section className="overflow-x-auto px-2.5 pb-2.5">
            <table className="w-full text-center">
              <thead>
                <tr className="border-b border-[#ccc] font-bold">
                  <th className="p-4">Vencimento</th>
                  <th className="p-4">Valor R$</th>
                  <th className="p-4">Situação</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#eee]">
                  <td className="p-4">19/01/2026</td>
                  <td>500,00</td>
                  <td className="font-bold">Pago</td>
                </tr>
                <tr className="border-b border-[#eee]">
                  <td className="p-4 text-red-600">19/02/2026</td>
                  <td>500,00</td>
                  <td className="font-bold text-red-600">Em atraso</td>
                </tr>
                <tr className="border-b border-[#eee]">
                  <td className="p-4">19/03/2026</td>
                  <td>500,00</td>
                  <td className="font-bold">A Pagar</td>
                </tr>
              </tbody>
            </table>
          </section>
        </article>
      </main>
    </section>
  );
}

export default Boletos;