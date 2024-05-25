"use client";
import React from "react";
import "@/styles/Home/calculatePriceHome.scss";
import changeIcon from "../../../public/Icon/change.svg";

import Image from "next/image";

function CalculatePriceHome() {
  return (
    <div className="CalculatePriceHome">
      <p>Узнать цену онлайн</p>

      <div className="CalculatePriceHome__cities">
        <div className="CalculatePriceHome__cities-items">
          <div className="CalculatePriceHome__cities-items__item">Город</div>

          <div className="CalculatePriceHome__cities-items__item">Город</div>
        </div>

        <div className="CalculatePriceHome__cities-image">
          <Image src={changeIcon} alt="changeIcon" />
        </div>
      </div>

      <div className="CalculatePriceHome__options">
        <div className="CalculatePriceHome__options-item">FCL (полный контейнер)</div>
        <div className="CalculatePriceHome__options-item">LCL (сборный груз)</div>
      </div>

      <div className="CalculatePriceHome__submit">
        <button>Рассчитать</button>
      </div>
    </div>
  );
}

export default CalculatePriceHome;
