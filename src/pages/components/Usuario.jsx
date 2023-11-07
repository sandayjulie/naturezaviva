import "./Usuario.css";

function FormularioLogin() {
  return (
    <div>
      <div className="containerLogin">
        <header className="header">
          <h1>Entre no nosso site!</h1>
        </header>

        <form className="forms">
          <div className="inputContainer">
            <label>Usuário</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="exemplo@email.com"
            ></input>
          </div>
<br/>
          <div className="inputContainer">
            <label>Senha</label>
            <input
              type="password"
              name="senha"
              id="password"
              placeholder="***********"
            ></input>
          </div>


          <button className="button">Entrar</button>

          <div className="footerLogin">
            <p>Não possui uma conta?</p>
            <button className="button1" href="/contato">Crie uma conta!</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormularioLogin;
