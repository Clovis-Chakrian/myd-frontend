import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const AuthLayer = () => {
  const navigate = useNavigate();

  const handleIsAutenticado = () => {
    const token = localStorage.getItem("jwt_token");

    if (!token) navigate("/login");
  }

  useEffect(() => {
    handleIsAutenticado();
  }, []);

  return (
    <Outlet />
  );
}