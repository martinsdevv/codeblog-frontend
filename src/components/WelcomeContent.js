import * as React from "react";

export default class WelcomeContent extends React.Component {
  render() {
    return (
      <div className="row justify-content-md-center">
        <div jumbotron jumbotron-fluid>
          <div className="container">
            <h1 className="display-4">Bem-Vindo!</h1>
            <p className="lead">Faça login para ver o conteúdo protegido.</p>
          </div>
        </div>
      </div>
    );
  }
}
