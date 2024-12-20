import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  const isLoggedIn = true;
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
