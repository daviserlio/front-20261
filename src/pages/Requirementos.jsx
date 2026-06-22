import { useEffect, useState } from "react";
import { useNavigate, Outlet, useMatch } from "react-router";
import Topbar from "../components/Topbar";
import { listarRequerimentos } from "../services/requerimentoService";

function Requerimentos() {
  const navigate = useNavigate();
  const isBase = useMatch("/requerimentos");
  const [requerimentos, setRequerimentos] = useState([]);

  useEffect(() => {
    if (isBase) {
      listarRequerimentos().then(setRequerimentos);
    }
  }, [isBase]);

  return (
    <>
      {isBase ? (
        <main className="flex-1 p-6 md:p-10 bg-white min-h-screen">
          <Topbar />
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl md:text-5xl font-bold">Meus Requerimentos</h2>
            <button
              onClick={() => navigate("/requerimentos/novo")}
              className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-5 py-3 rounded-lg hover:bg-blue-700 transition shadow"
            >
              ➕ Novo Requerimento
            </button>
          </div>
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
                  {requerimentos.map((r) => (
                    <tr key={r.id} className="border-b border-[#eee]">
                      <td className="p-4 text-left">{r.tipo}</td>
                      <td>{r.data}</td>
                      <td>{r.situacao}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </article>
        </main>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default Requerimentos;