import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../api/authApi";

export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  return children;
};