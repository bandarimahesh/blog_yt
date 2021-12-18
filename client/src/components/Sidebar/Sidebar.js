import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About me</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          doloribus odit provident autem laudantium
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/post?cat=life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/post?cat=music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/post?cat=world">
              World
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/post?cat=sports">
              Sports
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/post?cat=news">
              News
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">Follow us</div>
        <div className="sidebarSocial">
          <i class="sidebarIcon fab fa-facebook-square"></i>
          <i class="sidebarIcon fab fa-twitter-square"></i>
          <i class="sidebarIcon fab fa-pinterest-square"></i>
          <i class="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
