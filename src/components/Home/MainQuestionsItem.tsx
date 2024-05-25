"use client";
import React, { useState } from "react";
import "@/styles/Home/MainQuestionsItem.scss";
import Image from "next/image";
import chevron from "../../../public/Icon/chevron-grey.svg";

interface Props {
  head: string;
  description: string;
}

function MainQuestionsItem({ head, description }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="MainQuestionsItem">
      <div className="MainQuestionsItem__question" onClick={toggleOpen}>
        <h3>{head}</h3>
        <Image
          src={chevron}
          alt="chevron"
          style={{
            transform: isOpen ? "rotate(-90deg)" : "rotate(90deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </div>
      {isOpen && (
        <div className="MainQuestionsItem__description">{description}</div>
      )}
    </div>
  );
}

export default MainQuestionsItem;
