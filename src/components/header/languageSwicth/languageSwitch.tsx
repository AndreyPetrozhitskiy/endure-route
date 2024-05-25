"use client";
import React from "react";
import "./../../../styles/components/header/languageSwicth/languageSwicth.scss";
import globeIcon from "./../../../../public/Icon/globe.png";
import Image from "next/image";
import chevron from "./../../../../public/Icon/Type=chevron-down-small.png";

function LanguageSwitch() {
  return (
    <div className="LanguageSwitch">
      <Image src={globeIcon} alt="globeIcon" />
      <div className="LanguageSwitch__text">
        <p>Russian</p>
      </div>
      <Image src={chevron} alt="globeIcon" />
    </div>
  );
}

export default LanguageSwitch;
