function Tabela(props) {
    return (
        <article className="border border-[#ccc] rounded-xl overflow-hidden bg-white flex flex-col mb-8">
            {props.titulo && (
                <header className="bg-[#e6e6e6] px-5 py-4 border-b border-[#ccc]">
                    <h3 className="font-bold text-lg text-[#1a1a1a]">{props.titulo}</h3>
                </header>
            )}

            <section className="overflow-x-auto">
                <table className="w-full text-center border-collapse">
                    {props.colunas && (
                        <thead>
                            <tr className="border-b border-[#ccc] font-bold text-[#1a1a1a] bg-[#f9f9f9]">
                                {props.colunas.map((coluna, index) => (
                                    <th key={index} className={`p-4 ${index === 0 ? "text-left" : ""}`}>
                                        {coluna}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                    )}

                    {props.linhas && (
                        <tbody>
                            {props.linhas.map((linha, rowIndex) => (
                                <tr key={rowIndex} className="border-b border-[#eee] last:border-0 text-[#1a1a1a]">
                                    {linha.map((celula, cellIndex) => {
                                        const isRed = celula === "Em atraso";
                                        const isBold = ["SR", "MM", "MS", "Pago", "A Pagar", "Em atraso"].includes(celula);

                                        return (
                                            <td
                                                key={cellIndex}
                                                className={`p-4 ${cellIndex === 0 ? "text-left" : ""} ${isRed ? "text-red-600" : ""} ${isBold ? "font-bold" : ""}`}
                                            >
                                                {celula}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    )}
                </table>
            </section>
        </article>
    );
}

export default Tabela;