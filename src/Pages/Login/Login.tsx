import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../../Context/Context";
import "./style.css";

export default function Login() {
  const navigate = useNavigate();
  const { setLogged } = useContext(Context);

  function handleClickLogin() {
    setLogged(true);
    navigate("home");
  }

  return (
    <div className="pagina-login">
      <div className="login">
        <input className="input-login" type="text" placeholder="login" />
        <input className="input-senha" type="text" placeholder="senha" />
        <button className="button-login" onClick={() => handleClickLogin()}>
          login
        </button>
      </div>
      <div className="link-home">
        <h3>Navegar para localhost/home</h3>
        <button className="button-ir" onClick={() => navigate("home")}>ir</button>
      </div>
    </div>
  );
}
