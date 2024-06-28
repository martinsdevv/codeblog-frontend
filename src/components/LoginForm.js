import * as React from "react";
import classNames from "classnames";

/* https://youtu.be/bqFjrhRrvy8?si=SamGWNP4EOazJPkP&t=1802 */

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "login",
      firstName: "",
      lastName: "",
      login: "",
      password: "",
      onLogin: props.onLogin,
      onRegister: props.onRegister,
    };
  }

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  onSubmitLogin = (event) => {
    this.state.onLogin(event, this.state.login, this.state.password);
  };

  onSubmitRegister = (event) => {
    this.state.onRegister(
      event,
      this.state.firstName,
      this.state.lastName,
      this.state.login,
      this.state.password
    );
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-4">
          <ul
            className="nav nav-pills nav-justified mb-3"
            id="ex1"
            rol="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className={classNames(
                  "nav-link",
                  this.state.active === "login" ? "active" : ""
                )}
                id="tab-login"
                onClick={() => this.setState({ active: "login" })}
              >
                Login
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={classNames(
                  "nav-link",
                  this.state.active === "register" ? "active" : ""
                )}
                id="tab-register"
                onClick={() => this.setState({ active: "register" })}
              >
                Registrar
              </button>
            </li>
          </ul>

          <div className="tab-content">
            <div
              className={classNames(
                "tab-pane",
                "fade",
                this.state.active === "login" ? "show active" : ""
              )}
              id="pills-login"
            >
              <form onSubmit={this.onSubmitLogin}>
                <div>
                  <label className="form-label" htmlFor="loginName">
                    Usuário
                  </label>
                  <input
                    type="login"
                    id="loginName"
                    name="login"
                    className="form-control"
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="loginPassword">
                    Senha
                  </label>
                  <input
                    type="password"
                    id="loginPassword"
                    name="password"
                    className="form-control"
                    onChange={this.onChangeHandler}
                  />
                </div>
                <br></br>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Entrar
                </button>
              </form>
            </div>
            <div
              className={classNames(
                "tab-pane",
                "fade",
                this.state.active === "register" ? "show active" : ""
              )}
              id="pills-register"
            >
              <form onSubmit={this.onSubmitRegister}>
                <div>
                  <label className="form-label" htmlFor="firstName">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-control"
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="lastName">
                    Sobrenome
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-control"
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="login">
                    Usuário
                  </label>
                  <input
                    type="text"
                    id="login"
                    name="login"
                    className="form-control"
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="password">
                    Senha
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    onChange={this.onChangeHandler}
                  />
                </div>
                <br></br>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Registrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
