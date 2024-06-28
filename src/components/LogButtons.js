import * as React from "react";

export function LogButtons(props) {
  return (
    <div className="row">
      <div className="col-md-12 text-center" style={{ margin: "30px" }}>
        <button
          className="btn btn-primary"
          style={{ margin: "10px" }}
          onClick={props.login}
        >
          Login
        </button>
        <button
          className="btn btn-danger"
          style={{ margin: "10px" }}
          onClick={props.logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
