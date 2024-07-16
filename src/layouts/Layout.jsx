import Sidebar from "@/components/common/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
   return (
      <main className="h-screen max-h-screen grid md:grid-cols-[16rem,1fr] lg:grid-cols-[18rem,1fr] text-gray-500">
         <Sidebar />

         <Outlet />
      </main>
   );
};
export default Layout;
