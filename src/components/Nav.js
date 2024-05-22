import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Nav() {
  const navRef1 = useRef();
  const navRef2 = useRef();
  function navLeave1() {
    navRef1.current.classList.add("navPopUp");
  }
  function navEnter1() {
    navRef1.current.classList.remove("navPopUp");
  }
  function navLeave2() {
    navRef2.current.classList.add("navPopUp");
  }
  function navEnter2() {
    navRef2.current.classList.remove("navPopUp");
  }
  return (
    <nav className="me-5 mt-3">
      <ul className="list-inline d-flex gap-5 nav-ul">
        <li
          ref={navRef1}
          className="list-inline-item"
          onMouseEnter={navEnter1}
          onMouseLeave={navLeave1}
        >
          <Link
            ref={navRef1}
            className="text-decoration-none fw-bold  fs-3 nav-li"
            style={{ fontFamily: "Georgia,serif" }}
          >
            About
          </Link>
        </li>
        <li
          ref={navRef2}
          className="list-inline-item "
          onMouseEnter={navEnter2}
          onMouseLeave={navLeave2}
        >
          <Link className="text-decoration-none fw-bold fs-3 nav-li">
            Services
          </Link>
        </li>
      </ul>
    </nav>
  );
}
