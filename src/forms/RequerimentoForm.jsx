import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function RequerimentoForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(dados) {
    console.log("Novo requerimento:", dados);
    reset();
  }

  return (
    <main className="flex-1 p-6 md:p-10 bg-white min-h-screen">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Novo Requerimento</h2>
      <p className="text-xl md:text-2xl font-bold text-gray-700 mb-10">
        Preencha os dados da sua solicitação
      </p>

      <article className="border border-[#ccc] rounded-xl overflow-hidden p-2.5 bg-white max-w-2xl">
        <header className="bg-[#e6e6e6] px-5 py-[15px] mb-6 -mx-2.5 -mt-2.5 font-bold text-lg text-center">
          Formulário de Requerimento
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="px-2.5 pb-4 flex flex-col gap-6">

          {/* Tipo de Requerimento */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Tipo de Requerimento
            </label>
            <select
              className={`w-full p-3 border rounded-lg text-gray-800 bg-gray-50 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${
                errors.tipo ? "border-red-500 bg-red-50" : "border-gray-300"
              }`}
              {...register("tipo", { required: "O tipo de requerimento é obrigatório." })}
            >
              <option value="">Selecione...</option>
              <option value="Revisão de Menção">Revisão de Menção</option>
              <option value="Dispensa de Disciplina">Dispensa de Disciplina</option>
              <option value="Trancamento de Matrícula">Trancamento de Matrícula</option>
              <option value="Aproveitamento de Estudos">Aproveitamento de Estudos</option>
              <option value="Segunda Chamada">Segunda Chamada</option>
            </select>
            {errors.tipo && (
              <span className="text-red-500 text-sm">⚠ {errors.tipo.message}</span>
            )}
          </div>

          {/* Descrição */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Descrição
            </label>
            <textarea
              rows={4}
              placeholder="Descreva sua solicitação (mínimo 10 caracteres)"
              className={`w-full p-3 border rounded-lg text-gray-800 bg-gray-50 outline-none transition resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${
                errors.descricao ? "border-red-500 bg-red-50" : "border-gray-300"
              }`}
              {...register("descricao", {
                required: "A descrição é obrigatória.",
                minLength: {
                  value: 10,
                  message: "A descrição deve ter no mínimo 10 caracteres.",
                },
              })}
            />
            {errors.descricao && (
              <span className="text-red-500 text-sm">⚠ {errors.descricao.message}</span>
            )}
          </div>

          {/* Data do Requerimento */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Data do Requerimento
            </label>
            <input
              type="text"
              readOnly
              value={new Date().toLocaleDateString("pt-BR")}
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-500 bg-gray-100 outline-none cursor-not-allowed"
            />
          </div>

          {/* Botões */}
          <div className="flex gap-4 justify-end mt-2">
            <button
              type="button"
              onClick={() => navigate("/requerimentos")}
              className="px-6 py-3 rounded-lg border border-gray-300 font-semibold text-gray-600 hover:bg-gray-100 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow"
            >
              Salvar
            </button>
          </div>

        </form>
      </article>
    </main>
  );
}

export default RequerimentoForm;