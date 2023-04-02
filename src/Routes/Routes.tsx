import { useContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import { Notfound } from "../Pages/Notfound/Notfound";
import Context from "../Context/Context";

export default function RoutesApp() {
  const { logged } = useContext(Context);

  function Authentication({ children }) {
    if (logged) return children;
    return <Notfound/>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <Authentication>
              <Home />
            </Authentication>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
