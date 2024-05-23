import React from "react";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="sticky-top">
      <div className="row">
        <div className="col-6 d-flex justify-content-start">
          <img
            src="images/jarul.png"
            className="ms-3 rounded-circle"
            style={{ width: "150px", height: "150px" }}
          />
        </div>
        <div className="col-6 d-flex justify-content-end">
          <Nav />
        </div>
      </div>
    </header>
  );
}
