import React from "react";
import { Link } from "react-scroll";
import "../Learn.css";
function Navbar() {
  return (
    <div className="mb-3">
      <nav class="navbar bg-warning rounded mt-3 navbar-expand-lg ">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
        <ul className="col-12 m-auto text-center learn-li ">
          <li className=" py-3">
            <Link
              to="overview"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              className="learn-list"
              href=""
            >
              overview
            </Link>
          </li>
          <li className=" py-3">
            <Link
              to="curriculum"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              className="learn-list"
              href=""
            >
              curriculum
            </Link>
          </li>
          <li className=" py-3">
            <Link
              to="certifiaction"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              className="learn-list"
              href=""
            >
              certification
            </Link>
          </li>
          <li className=" py-3">
            <Link
              to="fees"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              className="learn-list"
              href=""
            >
              fees
            </Link>
          </li>
          <li className=" py-3">
            <Link
              to="reviews"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              className="learn-list"
              href=""
            >
              Reviews
            </Link>
          </li>
          <li className=" py-3">
            <Link
              to="faq"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              className="learn-list"
              href=""
            >
              FAQs
            </Link>
          </li>
        </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
