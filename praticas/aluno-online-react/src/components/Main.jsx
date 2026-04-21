import Topbar from "./Topbar";

function Main(props) {
  return (
    <main className="flex-1 p-6 md:p-10 bg-white min-h-screen flex flex-col w-full">
      <Topbar titulo={props.titulo} />
      
      {props.subtitulo && (
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-10">
          {props.subtitulo}
        </p>
      )}

      <section className="w-full">
        {props.children}
      </section>
    </main>
  );
}

export default Main;