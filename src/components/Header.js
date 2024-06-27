import * as React from "react";

export default function Header(props) {
  return (
    <header className="app-header">
      <img src={props.logoSrc} className="app-logo" alt="logo" />
      <h1 className="app-title">{props.pageTitle}</h1>
    </header>
  );
}
