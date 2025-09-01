import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Formulario from "./pages/Formulario";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/formulario',
    element: <Formulario/>
  },
  {
    path: '*',
    element: <NotFound/>
  },
]);

export default function Routes(){
  return <RouterProvider router={router} />
}