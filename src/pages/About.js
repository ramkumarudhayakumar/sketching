import React from "react";

export default function About() {
  return (
    <div className="container d-flex justify-content-center my-5">
      <div className="card " style={{ width: "50%", height: "50%" }}>
        <div className="card-body">
          <h1 className="fw-bold text-center">
            ABOUT <span>US</span>
          </h1>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body"></div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body"></div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
