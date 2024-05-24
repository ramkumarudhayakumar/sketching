import React from "react";
import { useRef, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { FaGratipay } from "react-icons/fa";
import PaymentPage from "./PaymentPage";

export default function PayNowButton() {
  const [hide, setHide] = useState(false);
  const btnRef = useRef();
  function scannerHandler() {
    setHide(!hide);
  }
  function btnLeave1() {
    btnRef.current.classList.add("navPopUp");
  }
  function btnEnter1() {
    btnRef.current.classList.remove("navPopUp");
  }

  return (
    <Fragment>
      <Link
        to=""
        className="text-decoration-none d-flex align-items-center justify-content-center paynow-link"
      >
        <button
          ref={btnRef}
          className="btn app-button fw-bold mb-5"
          style={{ height: "50px", fontSize: "20px" }}
          onMouseEnter={btnEnter1}
          onMouseLeave={btnLeave1}
          onClick={scannerHandler}
        >
          Pay Now
          <FaGratipay className="ms-2 mb-1" style={{ fontSize: "30px" }} />
        </button>
      </Link>
      {hide && <PaymentPage />}
    </Fragment>
  );
}
