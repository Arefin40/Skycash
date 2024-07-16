import { Link } from "react-router-dom";
import { ArrowRightLeft, Home, LayoutPanelLeft, UserCog } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LogOut from "@/icons/LogOut";
import BalanceInquery from "../ui/BalanceInquery";

const Sidebar = () => {
   return (
      <>
         <aside className="px-6 py-6 hidden h-screen md:flex flex-col gap-y-6 content-start border-r bg-white">
            <Link to="/" className="block px-2">
               <h1 className="font-bold text-3xl text-primary">Skycash</h1>
            </Link>

            <nav>
               <ul className="space-y-1">
                  <Link to="/" className="block px-2 py-2.5 hover:bg-gray-100 rounded-md">
                     <li className="flex gap-x-2 items-center">
                        <LayoutPanelLeft className="w-5 h-5 text-gray-500" />
                        <h4>Dashboard</h4>
                     </li>
                  </Link>
                  <Link
                     to="/transactions"
                     className="block px-2 py-2.5 hover:bg-gray-100 rounded-md"
                  >
                     <li className="flex gap-x-2 items-center">
                        <ArrowRightLeft className="w-5 h-5 text-gray-500" />
                        <h4>Transactions</h4>
                     </li>
                  </Link>
               </ul>
            </nav>

            <div className="mt-auto space-y-3">
               <div className="flex gap-x-2 items-center">
                  <Avatar className="w-8 h-8">
                     <AvatarImage src="https://github.com/shadcn.png" alt="profile picture" />
                     <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <BalanceInquery />
               </div>

               <button className="flex items-center gap-x-4 rounded-lg group">
                  <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full overflow-hidden">
                     <LogOut className="w-5 h-5 text-gray-600 group-hover:text-gray-700" />
                  </div>
                  <span>Log out</span>
               </button>
            </div>
         </aside>

         <header className="fixed md:hidden py-2.5 border inset-x-0 text-sm bg-white">
            <div className="container flex items-center justify-between gap-x-2 gap-y-1 flex-wrap">
               <div className="flex items-center gap-x-2">
                  <Avatar className="w-8 h-8">
                     <AvatarImage src="https://github.com/shadcn.png" alt="profile picture" />
                     <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <BalanceInquery />
               </div>

               <div className="flex items-center gap-x-1.5">
                  <Link to="/" className="ml-auto active:scale-90 transition-all">
                     <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 bg-gray-100 rounded-full">
                        <Home className="w-5 h-5 text-gray-500" />
                     </div>
                  </Link>
                  <Link to="/transactions" className="ml-auto active:scale-90 transition-all">
                     <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 bg-gray-100 rounded-full">
                        <UserCog className="w-5 h-5 text-gray-500" />
                     </div>
                  </Link>
                  <Link to="/users" className="ml-auto active:scale-90 transition-all">
                     <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 bg-gray-100 rounded-full">
                        <ArrowRightLeft className="w-5 h-5 text-gray-500" />
                     </div>
                  </Link>
               </div>
            </div>
         </header>
      </>
   );
};
export default Sidebar;
