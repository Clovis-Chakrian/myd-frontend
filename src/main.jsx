import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CatalogoClinicas } from "./pages/CatalogoClinicas/CatalogoClinicas.jsx";
import InitialPage from "./pages/InitialPage/InitialPage.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { SobreNos } from "./pages/SobreNos/SobreNos.jsx";
import { Cadastro } from "./pages/Cadastro/Cadastro.jsx";
import { Squads } from "./pages/Squads/Squads.jsx"
import { Trilhas } from "./pages/Trilhas/Trilhas.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InitialPage />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/catalogo-clinicas",
    element: <CatalogoClinicas />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/sobre-nos",
    element: <SobreNos />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/squads",
    element: <Squads />
  },
  {
    path: "/trilhas",
    element: <Trilhas/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
