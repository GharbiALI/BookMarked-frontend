import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./component/Home";
import { Login } from "./component/Login";
import { SignIn } from "./component/SignIn";
import { Library } from "./component/library/Library";
import { NotFound } from "./component/NotFound";
import { RequireAuth } from "./component/RequireAuth";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/library"
          element={
            <RequireAuth>
              <Library />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};