import React from "react";
import Tilt from "react-parallax-tilt";

export default function SampleArt() {
  return (
    <div className="container">
      <div className="card sampleArt-card my-5">
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
                  </div>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
