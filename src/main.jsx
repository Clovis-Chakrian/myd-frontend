import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CatalogoClinicas } from "./pages/CatalogoClinicas/CatalogoClinicas.jsx";
import { InitialPage } from "./pages/InitialPage/InitialPage.jsx";
import { CatalogoEventos } from "./pages/CatalogoEventos/CatalogoEventos.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { SobreNos } from "./pages/SobreNos/SobreNos.jsx";
import { Cadastro } from "./pages/Cadastro/Cadastro.jsx";
import { Squads } from "./pages/Squads/Squads.jsx";
import { Trilhas } from "./pages/Trilhas/Trilhas.jsx";
import { SelectBall } from "./pages/SelectBall/SelectBall.jsx";
import { Config } from "./pages/Config/Config.jsx";
import { ListagemSquad } from "./pages/ListagemSquad/ListagemSquad.jsx";
import { Chat } from "./pages/Chat/Chat.jsx";
import { MainLayout } from "./MainLayout.jsx";
import { TrilhaListagem } from "./pages/TrilhaListagem/TrilhaListagem.jsx";
import { MinhasTrilhas } from "./pages/MinhasTrilhas/MinhasTrilhas.jsx";
import { DetalhesTrilhas } from "./pages/DetalhesTrilhas/DetalhesTrilhas.jsx";
import { GerarDesafiosTrilha } from "./pages/GerarDesafiosTrilha/GerarDesafiosTrilha.jsx";
import { MeusDadosTrilha } from "./pages/MeusDadosTrilha/MeusDadosTrilha.jsx";
import { Login } from "./pages/Login/Login.jsx";
import { App } from "./App.jsx";
import { AuthLayer } from "./AuthLayer.jsx";
import { MeusDesafios } from "./pages/MeusDesafios/MeusDesafios.jsx";
import { Explore } from "./pages/Explore/Explore.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InitialPage />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <AuthLayer />,
    children: [
      {
        path: "/ball",
        element: <SelectBall />,
      },
      {
        path: "/trilhas",
        element: <Trilhas />,
      },
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "catalogo-clinicas",
            element: <CatalogoClinicas />,
          },
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "sobre-nos",
            element: <SobreNos />,
          },
          {
            path: "squads",
            element: <Squads />,
          },
          {
            path: "config",
            element: <Config />,
          },
          {
            path: "listagem-squad",
            element: <ListagemSquad />,
          },
          {
            path: "chat",
            element: <Chat />,
          },
          {
            path: "listagem-trilhas",
            element: <TrilhaListagem />,
          },
          {
            path: "minhas-trilhas",
            element: <MinhasTrilhas />,
          },
          {
            path: "meus-dados-trilha/:trilhaId",
            element: <MeusDadosTrilha />,
          },
          {
            path: "/meus-desafios/:trilhaId",
            element: <MeusDesafios />,
          },
          {
            path: "/:trilhaId",
            element: <DetalhesTrilhas />,
          },
          {
            path: "gerar-desafios-trilha/:trilhaId",
            element: <GerarDesafiosTrilha />,
          },
          {
            path: "/catalogo-eventos",
            element: <CatalogoEventos />,
          },
          {
            path: "/explore",
            element: <Explore />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
);
