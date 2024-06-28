import * as React from "react";
import { request } from "./axios_helper";

export default class AuthContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], // Inicializa como um array vazio
    };
  }

  componentDidMount() {
    request("GET", "/messages", {})
      .then((response) => {
        if (Array.isArray(response.data)) {
          this.setState({ data: response.data });
        } else {
          console.error("Expected array but got:", response.data);
          this.setState({ data: [] });
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.setState({ data: [] });
      });
  }

  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Resposta do Backend</h5>
              {Array.isArray(this.state.data) &&
                this.state.data.map((line, index) => <p key={index}>{line}</p>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
