import React, { useEffect, useState, Fragment } from "react";
import scanner from "../images/scanner.jpg";
import Loader from "./Loader";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PaymentPage() {
  useEffect(() => {
    AOS.init({ duration: 2000, delay: 4000 });
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fakeDatFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };
    fakeDatFetch();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <Fragment>
      <div
        className="container payment-page-container d-flex justify-content-center align-items-center"
        style={{ height: "70vh" }}
      >
        <div className="row">
          <div className="col d-grid justify-content-center ">
            <div className="card payment-card m-5 " data-aos="zoom-in">
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
      <div className="container">
        <div className="card my-3 payment-page-card-1">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <img src="" />
              </div>
              <div className="col">
                <div>
                  <h5>
                    Training Mode :<span>Online</span>
                  </h5>
                  <h5>
                    Training Fees :<span>3000 /-</span>
                  </h5>
                  <h5>
                    Training Duration :<span>Three Months</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card my-3 payment-page-card-2">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <img src="" />
              </div>
              <div className="col">
                <div className="">
                  <h5>
                    Training Mode :<span>Offline</span>
                  </h5>
                  <h5>
                    Training Fees :<span>4000 /-</span>
                  </h5>
                  <h5>
                    Training Duration :<span>Two Months</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
