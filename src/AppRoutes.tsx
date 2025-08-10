import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Home";
import ServiciosPage from "./pages/Servicios";
import NosotrosPage from "./pages/Nosotros";
import AlianzasPage from "./pages/Alianzas";
import ContactoPage from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/servicios',
    element: <ServiciosPage/>
  },
  {
    path: '/nosotros',
    element: <NosotrosPage/>
  },
  {
    path: '/alianzas',
    element: <AlianzasPage/>
  },
  {
    path: '/contacto',
    element: <ContactoPage/>
  },
  {
    path: '*',
    element: <NotFound/>
  },
]);

export default function Routes(){
  return <RouterProvider router={router} />
}