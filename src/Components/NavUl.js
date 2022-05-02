import React from "react";
import "../Styles/NavUl.css";

const NavUl = ({openMenuList}) => {
  return (
    <>
      <ul className={`${openMenuList === true ? 'close_menu is-active' : 'ul_container_nav'}`}>
        <li>About</li>
        <hr className="hr"/>
        <li>Discover</li>
        <hr  className="hr"/>
        <li>Get Started</li>
      </ul>
    </>
  );
};

export default NavUl;
