import { useContext } from "react";
import {  useNavigate } from "react-router-dom";
import Context from "../../Context/Context";

export default function Home() {

  const navigate = useNavigate();
  const { setLogged } = useContext(Context);

  function handleClickSair() {
    setLogged(false);
    navigate('/');
  }

  return (
  <div>
    <h1>Home</h1>
      <button
      onClick={()=> handleClickSair()}>
        Sair
      </button>
  </div>
);
}

