import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;