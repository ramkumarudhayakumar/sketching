import React, { useEffect } from "react";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="container m-5">
      <div className="row">
        <div className="col d-grid align-content-center ms-3 justify-content-center">
          <h1
            className="mb-5 fw-bold"
            style={{
              color: "#00ff00",
              letterSpacing: "4px",
              wordSpacing: "3px",
              cursor: "pointer",
            }}
          >
            Jarul Art Studio
          </h1>
          <h3 className="fw-bold footer-h3 mb-3" style={{ cursor: "pointer" }}>
            Connect With Us
          </h3>
          <p className="footer-p fs-5" style={{ cursor: "pointer" }}>
            93853 20583
          </p>
          <p className="footer-p fs-5" style={{ cursor: "pointer" }}></p>
          <p className="footer-p fs-5" style={{ cursor: "pointer" }}>
            14/24, Padikattu Thurai, Karur, Tamilnadu 639001
          </p>
          <div className="d-flex gap-5 mt-3">
            <a
              href="https://www.instagram.com/harinajarul_sketches/?hl=en"
              target="blank"
              className="fw-bold  footer-instagram"
              style={{ color: "#be2ed6" }}
            >
              <GrInstagram size={30} />
            </a>
            <a
              href=""
              target="blank"
              className="fw-bold"
              style={{ color: "#1877f2" }}
            >
              <FaFacebook size={30} />
            </a>
            <a
              href=""
              target="blank"
              className="fw-bold"
              style={{ color: "#FF0000" }}
            >
              <IoLogoYoutube size={30} />
            </a>
            <a
              href="https://x.com/harinajarul?lang=en"
              target="blank"
              className="fw-bold"
              style={{ color: "#08a0e9" }}
            >
              <FaTwitter size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
