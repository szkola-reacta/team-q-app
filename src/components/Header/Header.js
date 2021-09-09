import React, { useState } from "react";

import NavList from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
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
  const switchClass = toggle ? "navigation--open" : "navigation--close";

  return (
    <nav className={`navigation ${switchClass}`}>
      <header>VideNet</header>
      {toggle ? closeIcon : hamburgerIcon}
      <NavList />
    </nav>
  );
}

