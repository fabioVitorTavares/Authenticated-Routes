import './style.css';



export default function Login() {
  return (
    <div className="pagina-login">
      <div className="login">
        <input className="input-login" type="text" placeholder="login" />
        <input className="input-senha" type="text" placeholder="senha" />
        <button className="button-login" >login</button>
      </div>
    </div>
  );
}
