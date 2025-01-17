import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {

    const navigate =useNavigate()

    function handlelogOut(){
        localStorage.removeItem('token')
        navigate('/login')
        toast('Logged Out', {type:'info'})
    }

  return (
    <header className=" text-bg-primary shadow sticky-top py-3">
      <nav className="container d-flex align-center justify-content-between fs-4">
        <Link
          className=" text-light logo-responsive text-reset fs-1 text-decoration-none"
          to="/"
        >
          Online Store
        </Link>

        <ul className=" list-unstyled d-flex align-items-center m-0 gap-3">
          <li>
            <Link
              className="btn-btn-primary text-light text-decoration-none"
              to="/"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className="btn-btn-primary text-light text-decoration-none"
              to="/details"
            >
              Details
            </Link>
          </li>

          <li>
            <Link
              className="btn-btn-primary text-light text-decoration-none"
              to="/about"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              className="btn-btn-primary text-light text-decoration-none"
              to="/contact"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              className="btn-btn-primary text-light text-decoration-none"
              to="/contact"
            >
              <i className="fa-solid fa-shopping-cart"></i>
            </Link>
          </li>

          <li>
            <button className="btn btn-primary fs-4" onClick={handlelogOut}>Log Out</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
