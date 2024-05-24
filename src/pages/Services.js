import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { FaRegGrinHearts } from "react-icons/fa";

export default function Services() {
  const navigate = useNavigate();
  function sampleArtHandler() {
    navigate("/sample/art");
  }
  return (
    <Fragment>
      <div
        id="services"
        className="container services-container"
        style={{ marginTop: "200px", marginBottom: "200px" }}
      >
        <div className="card services-card p-5 ">
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4">
                <Tilt>
                  <div className="card service-innercard mx-md-3 my-5">
                    <div className="card-body">
                      <img
                        src="images/Art1.jpg"
                        style={{
                          width: "700px",
                          height: "200px",
                          borderRadius: "20px",
                        }}
                        className="img-fluid "
                      />
                      <h5 className="fw-bold text-center mt-5 service-card-col-h1">
                        Animation
                        <br />
                        Sketch
                      </h5>
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <Tilt>
                  {" "}
                  <div className="card service-innercard mx-md-3 my-5">
                    <div className="card-body">
                      <img
                        src="images/Art2.jpg"
                        style={{
                          width: "700px",
                          height: "200px",
                          borderRadius: "20px",
                        }}
                        className="img-fluid "
                      />
                      <h5 className="fw-bold text-center mt-5 service-card-col-h1">
                        Kids
                        <br />
                        (Level-1)
                      </h5>
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="col-12 col-sm-12 col-md-4">
                <Tilt>
                  {" "}
                  <div className="card service-innercard mx-md-3 my-5">
                    <div className="card-body">
                      <img
                        src="images/nayanthara.jpg"
                        style={{
                          width: "700px",
                          height: "200px",
                          borderRadius: "20px",
                        }}
                        className="img-fluid "
                      />
                      <h5 className="fw-bold text-center mt-5 service-card-col-h1">
                        Kids
                        <br />
                        (Level-2)
                      </h5>
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="d-flex justify-content-center mt-5">
                <button
                  className="btn fw-bold text-center services-button "
                  onClick={sampleArtHandler}
                >
                  View Arts
                  <FaRegGrinHearts
                    className="ms-2 mb-1"
                    style={{ fontSize: "25px" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
