import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="container m-5">
      <div className="row">
        <div className="col d-flex flex-column  align-items-center ms-3">
          <h1 className="mb-5 fw-bold" style={{ color: "#00ff00" }}></h1>
          <h3 className="fw-bold footer-h3 mb-3">Connect With Us</h3>
          <p className="footer-p fs-5">93853 20583</p>
          <p className="footer-p fs-5">
            14/24, Padikattu Thurai, Karur, Tamilnadu 639001
          </p>
          <div className="d-flex gap-5">
            <a
              href=""
              target="blank"
              className="fw-bold footer-instagram"
              style={{ fontSize: "50px", color: "#be2ed6" }}
            >
              <CiInstagram />
            </a>
            <a
              href=""
              target="blank"
              className="fw-bold"
              style={{ fontSize: "50px", color: "red" }}
            >
              <FaYoutube />
            </a>
            <a
              href=""
              target="blank"
              className="fw-bold"
              style={{ fontSize: "50px", color: "blue" }}
            >
              <FaFacebook />
            </a>
            <a
              href=""
              target="blank"
              className="fw-bold"
              style={{ fontSize: "50px", color: "blue" }}
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
