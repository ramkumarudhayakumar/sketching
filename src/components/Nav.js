import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="me-5 ">
      <ul className="list-inline d-flex gap-3 ">
        <li className="list-inline-item ">
          <Link className="text-decoration-none fw-bold text-white">About</Link>
        </li>
        <li className="list-inline-item ">
          <Link className="text-decoration-none fw-bold text-white">
            Services
          </Link>
        </li>
      </ul>
    </nav>
  );
}
