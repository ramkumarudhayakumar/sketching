import React from "react";
import scanner from "../images/scanner.jpg";

export default function PaymentPage() {
  return (
    <div
      className="container payment-page-container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="row">
        <div className="col d-grid justify-content-center">
          <div className="card payment-card m-5">
            <div className="card-body m-3 ">
              <img
                src={scanner}
                alt="Scanner"
                style={{
                  width: "300px",
                  height: "200px",
                  borderRadius: "20px",
                }}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
