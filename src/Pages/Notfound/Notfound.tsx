import { useNavigate } from "react-router-dom";

export function Notfound() {
  const navigate = useNavigate();

  function handleClickVoltar() {
    navigate("/");
  }

  return (
    <div>
      <h1>Not found</h1>
      <button onClick={() => handleClickVoltar()}>Voltar</button>
    </div>
  );
}
