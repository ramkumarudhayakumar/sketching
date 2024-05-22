import React from "react";
import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <div className="row">
        <div className="col-6 d-flex justify-content-start">
          <img src="" />
        </div>
        <div className="col-6 d-flex justify-content-end">
          <Nav />
        </div>
      </div>
    </header>
  );
}
