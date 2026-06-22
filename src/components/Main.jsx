import Card from "./Card";
import Topbar from "./Topbar";

function Main() {
  return (
    <main className="flex-1 p-6 md:p-10 bg-white min-h-screen">
      <Topbar />
      <Card />
    </main>
  );
}

export default Main;