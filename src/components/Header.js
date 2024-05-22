import React from "react";
import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <div className="row">
        <div className="col-6 d-flex justify-content-start">
          <img
            src="images/ja logo png.png"
            className="rounded"
            style={{ width: "70px", height: "70px" }}
          />
        </div>
        <div className="col-6 d-flex justify-content-end">
          <Nav />
        </div>
      </div>
    </header>
  );
}
