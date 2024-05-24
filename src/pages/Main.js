import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { GiFeather } from "react-icons/gi";

export default function Main() {
  const navigate = useNavigate();
  function scannerHandler() {
    navigate("/payment/page");
  }
  return (
    <Fragment>
      <div className="row my-5">
        <div className="col-12 col-sm-12 col-md-6 d-grid flex-column justify-content-center align-content-center">
          <h1>
            <span className="fw-bold" style={{ color: "#00ff00" }}>
              <Typewriter
                words={["Hi", "Hello", "Vanakkam"]}
                loop={Infinity}
                cursor
                cursorStyle={<GiFeather className="ms-2" />}
                typeSpeed={150}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <h3 className="mt-3 app-row1-h3">Welcome to my Page</h3>
        </div>
        <div className="col-12 col-sm-12 col-md-6 ">
          <img
            className="main-col-2"
            src="images/Welcome.png"
            style={{
              width: "500px",
              height: "500px",
              filter: "drop-shadow(#abf7b1 0px 4px 12px)",
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 d-flex align-items-center justify-content-center mx-5  mx-md-0 mt-5">
          <div className="card card-1 ">
            <div className="card-body d-flex flex-column">
              <img
                src="images/pencil.jpg"
                style={{
                  width: "500px",
                  height: "300px",
                  borderRadius: "20px",
                }}
                className="img-fluid "
              />
              <h3 className="text-center mt-5 fw-blod card-h3">
                Personal Training
              </h3>
              <button
                className="btn my-4 fw-bold card-button align-self-center"
                onClick={scannerHandler}
              >
                Pay Now <IoIosArrowDropdownCircle className="ms-2 fs-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 d-flex align-items-center justify-content-center mx-5  mx-md-0 mt-5">
          <div className="card card-2">
            <div className="card-body d-flex flex-column">
              <img
                src="images/brush.jpg"
                style={{
                  width: "500px",
                  height: "300px",
                  borderRadius: "20px",
                }}
                className="img-fluid"
              />
              <h3
                className="text-center mt-5 fw-blod card-h3"
                style={{ color: "linear-gradient(#14469F,#DA3068)" }}
              >
                Online Training
              </h3>
              <button
                className="btn my-4 fw-bold card-button align-self-center"
                onClick={scannerHandler}
              >
                Pay Now
                <IoIosArrowDropdownCircle className="ms-2 fs-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
