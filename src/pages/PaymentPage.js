import React from "react";

export default function PaymentPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-grid justify-content-center">
          <div className="card payment-card m-5">
            <div className="card-body m-3 d-flex justify-content-center ">
              <img
                src="images/scanner.jpg"
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
