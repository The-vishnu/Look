import React from "react";
import { NavLink, Link } from "react-router-dom";


const NavbarTabs = () => {
  return (
    <div className="flex flex-row gap-9  font-serif">
      <p> home</p>
      <p>shop All</p>
      <p>contact</p>
      <p>Try On</p>
    </div>
  );
};

export default NavbarTabs;
