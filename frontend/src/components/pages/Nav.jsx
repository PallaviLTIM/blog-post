import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Nav = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const signoutClick = () => {
    localStorage.removeItem("user");
    // const payload = {
    //   email: email,
    // };
    // dispatch({ type: "REMOVE_USER", payload: payload });
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/profile"
                >
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/my-posts">
                  My Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/new-posts">
                  New Posts
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <p className="d-flex">
              <span className="form-control btn">{user.username}</span>
              <span className="form-control btn" onClick={signoutClick}>
                Signout
              </span>
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
