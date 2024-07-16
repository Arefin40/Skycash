import { useVisibility } from "@/hooks";
import { DollarSign } from "lucide-react";
import { useEffect } from "react";

const BalanceInquery = () => {
   const { isVisible, show, hide } = useVisibility();

   useEffect(() => {
      let timer;
      if (isVisible) timer = setTimeout(hide, 4000);
      return () => clearTimeout(timer);
   }, [isVisible]);

   return (
      <button
         onClick={show}
         className="relative w-32 h-7 flex items-center justify-center border rounded-full overflow-hidden"
      >
         <span>10000000</span>

         <div
            className={`absolute inset-0 bg-white flex items-center justify-center ${
               isVisible ? "opacity-0 delay-500 text-white" : "opacity-100"
            } transition-all duration-150`}
         >
            Balance
         </div>

         <div
            className={`left-px absolute top-1/2 w-6 h-6 flex items-center justify-center rounded-full border border-gray-100 -translate-y-1/2 bg-primary text-primary-foreground ${
               isVisible ? "translate-x-[6.25rem]" : "translate-x-0"
            } z-10 isolate transition-all duration-500 ease-in-out`}
         >
            <DollarSign className="w-4 h-4" />
         </div>
      </button>
   );
};
export default BalanceInquery;
