import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import RouterProvider from "@/layouts/RouterProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         retry: 5,
         refetchOnWindowFocus: false,
      },
   },
});

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <RouterProvider />
      </QueryClientProvider>
   </React.StrictMode>
);
