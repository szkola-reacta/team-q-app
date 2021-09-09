import React from "react";

export default function NavList() {
  const elements = ["Home", "Latest", "Movies", "Series", "Social", "Contact"];
  return (
    <ul className="navigation__list">
      {elements.map((el) => (
        <li key={el} className="navigation__element">
          {el}
        </li>
      ))}
    </ul>
  );
}
