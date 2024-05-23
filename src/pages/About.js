import React from "react";
import Tilt from "react-parallax-tilt";

export default function About() {
  return (
    <div
      id="about"
      className="container d-flex justify-content-center mx-5"
      style={{ marginTop: "200px", marginBottom: "200px" }}
    >
      <Tilt>
        <div className="card about-card">
          <div className="card-body">
            <h1 className="fw-bold text-center my-3 card-about-h1">
              ABOUT <span style={{ color: "#00ff00" }}>US</span>
            </h1>
            <p
              className="m-5"
              style={{
                wordSpacing: "3px",
                letterSpacing: "2px",
                lineHeight: "2em",
                fontSize: "20px",
                color: "#FFDBE9",
                fontFamily: "Lobster, sans-serif",
                fontStyle: "normal",
              }}
            >
              Jarul Arts teaches its students realistic drawing and painting,
              which helps in strengthening confidence. Jarul instructions help
              students avoid continual dissatisfaction with their artistic
              abilities, so that they will not eventually give up pursuing art
              as a viable interest. Drawing and painting are learned subjects,
              just like any other. Jarul takes a very classical approach in
              teaching drawing and painting. What it means is that instructions
              coupled with practice, will bring about an independent and
              confident artist in you. Student have worked for years before they
              ever became "masters" themselves. After months with Jarul ,
              students and their families are constantly amazed at their new
              abilities, and, that it is a real fun to learn how to draw and
              paint
            </p>
          </div>
        </div>
      </Tilt>
    </div>
  );
}
