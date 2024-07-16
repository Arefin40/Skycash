import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/layouts/Layout";
import ErrorPage from "@/pages/ErrorPage";
import Homepage from "@/pages/Homepage";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "/",
            element: <Homepage />,
         },
         {
            path: "/transactions",
            element: <Homepage />,
         },
         {
            path: "/users",
            element: <Homepage />,
         },
      ],
   },
]);

export default () => {
   return <RouterProvider router={router} />;
};
