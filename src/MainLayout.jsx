import { useEffect } from "react";
import { AppLayout } from "./components/AppLayout/AppLayout";
import { useNavigate } from "react-router-dom";

function MainLayout() {
  const navigate = useNavigate();

  const handleIsAutenticado = () => {
    const token = localStorage.getItem("jwt_token");

    if (!token) navigate("/login");
  }

  useEffect(() => {
    handleIsAutenticado();
  }, []);

  return (
    <AppLayout />
  );
}

export default MainLayout;
