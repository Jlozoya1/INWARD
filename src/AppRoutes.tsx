import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
]);

export default function Routes(){
  return <RouterProvider router={router} />
}