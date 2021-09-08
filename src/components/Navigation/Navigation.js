import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons";

import NavList from "./NavList";
import Header from "../Header/Header";

export default function Navigation() {
  const [toggle, switchNavigation] = useState(false);
  const clickHandler = () => switchNavigation(!toggle);

  const hamburgerIcon = (
    <FontAwesomeIcon
      icon={faBars}
      className="hamburger__icon"
      onClick={clickHandler}
    />
  );
  const closeIcon = (
    <FontAwesomeIcon
      icon={faWindowClose}
      className="close__icon"
      onClick={clickHandler}
    />
  );
  const switchClass = toggle ? "navigation__open" : "navigation__close";

  return (
    <nav className={`navigation ${switchClass}`}>
      <Header />
      {toggle ? closeIcon : hamburgerIcon}
      <NavList />
    </nav>
  );
}
