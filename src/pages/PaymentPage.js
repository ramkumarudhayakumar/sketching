import React, { useEffect, useState, Fragment } from "react";
import scanner from "../images/scanner.jpg";
import Loader from "./Loader";
import AOS from "aos";
import "aos/dist/aos.css";
import Online from "../images/online.png";
import Offline from "../images/offline.png";
import { FaSpaceShuttle } from "react-icons/fa";

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
      <div className="container">
        <h6 className="text-center mt-5 payment-notice">
          Notice : Once you complete your Payment Please Call me or Whatsapp me
          this Number 93853 20583
        </h6>
      </div>
      <div
        className="container payment-page-container d-flex justify-content-center align-items-center"
        style={{ height: "70vh" }}
      >
        <div className="row">
          <div className="col d-grid justify-content-center ">
            <div className="card payment-card mx-5 " data-aos="zoom-in">
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
              <div className="col-4 d-flex justify-content-center align-items-center">
                <img
                  src={Online}
                  className="img-fluid"
                  style={{
                    height: "100px",
                    width: "100px",
                    filter: "drop-shadow(#a020f0 0px 4px 12px)",
                  }}
                />
              </div>
              <div className="col-8">
                <div className="">
                  <h5 className="" style={{ color: "#00ff00" }}>
                    Training Mode &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FaSpaceShuttle />
                    &nbsp;
                    <span className="payment-span">Online</span>
                  </h5>
                  <h5 style={{ color: "#00ff00" }}>
                    Training Fees &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FaSpaceShuttle />
                    &nbsp;
                    <span className="payment-span">3000 /-</span>
                  </h5>
                  <h5 style={{ color: "#00ff00" }}>
                    Training Duration <FaSpaceShuttle />
                    &nbsp;
                    <span className="payment-span">Three Months</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card my-3 payment-page-card-2 ">
          <div className="card-body">
            <div className="row">
              <div className="col-4 d-flex justify-content-center align-items-center">
                <img
                  src={Offline}
                  className="img-fluid"
                  style={{
                    height: "100px",
                    width: "100px",
                    filter: "drop-shadow(#a020f0 0px 4px 12px)",
                  }}
                />
              </div>
              <div className="col-8">
                <div className="">
                  <h5 style={{ color: "#00ff00" }}>
                    Training Mode &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FaSpaceShuttle />
                    &nbsp;
                    <span className="payment-span">Offline</span>
                  </h5>
                  <h5 style={{ color: "#00ff00" }}>
                    Training Fees &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FaSpaceShuttle />
                    &nbsp;
                    <span className="payment-span">4000 /-</span>
                  </h5>
                  <h5 style={{ color: "#00ff00" }}>
                    Training Duration <FaSpaceShuttle />
                    &nbsp;
                    <span className="payment-span">Two Months</span>
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
