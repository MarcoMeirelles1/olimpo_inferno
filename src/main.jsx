import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Planos from "./pages/Planos";
import Home from "./pages/home.jsx"; // Corrigido: ajustado para o nome correto do arquivo
import Contato from "./pages/Contato";
import Duvidas from "./pages/Duvidas.jsx"; // Corrigido: ajustado o caminho correto
import Cadastrar from "./pages/Cadastrar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App  />,
  },
  {
    path: "/duvidas",
    element: <Duvidas />,
  },
  {
    path: "/planos",
    element: <Planos />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/contato",
    element: <Contato />,
  },
  {
    path: "/contato",
    element: <Cadastrar />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
