import React from "react";

import img from "../../assets/mrrobot.jpg";

export default function PromoWindow() {
  return (
    <div className="promo-window">
      <p className="promo-window__title">Recommended title for You</p>
      <img src={img} alt="Mr.robot" className="promo-window__image" />
      <div className="promo-window__description">
        <p className="promo-window__description-title">Mr.Robot</p>
        <p className="promo-window__description-text">
          Elliot (Rami Malek) to cierpiący na fobię społeczną, niewyróżniający
          się z tłumu, skryty w sobie programista. Jest specjalistą od
          cyberbezpieczeństwa w dużej korporacji AllSafe.
        </p>
      </div>
    </div>
  );
}
