import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./component/Home";
import { Login } from "./component/Login";
import { SignIn } from "./component/SignIn";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};