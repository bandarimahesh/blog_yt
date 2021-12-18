import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

const Topbar = () => {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i class="topIcon fab fa-facebook-square"></i>
        <i class="topIcon fab fa-twitter-square"></i>
        <i class="topIcon fab fa-pinterest-square"></i>
        <i class="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="topListItem">
            {user ? (
              <Link className="link" to="/login">
                Logout
              </Link>
            ) : (
              <Link className="link" to="/login">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://yt3.ggpht.com/yti/APfAmoGaSt5km2gSntgCFS8chsLtaiSBB6GeRv--m8ZQsJ0=s88-c-k-c0x00ffffff-no-rj-mo"
            alt="profile"
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i class=" topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default Topbar;
