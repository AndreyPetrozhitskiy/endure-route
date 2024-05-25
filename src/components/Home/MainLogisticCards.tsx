"use client";

import React, { useEffect, useState } from "react";
import LogisticCardItem from "./LogisticCard";

function MainLogisticCards() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null); // Добавляем touchStartX в состояние
  const totalSlides = 3;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      // Установить начальное значение
      handleResize();

      window.addEventListener("resize", handleResize);

      // Очистка эффекта при размонтировании компонента
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const handleTouchStart = (e: any) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: any) => {
    if (!touchStartX) return;
    const touchEndX = e.touches[0].clientX;
    const diffX = touchStartX - touchEndX;

    if (diffX > 50) {
      nextSlide();
      setTouchStartX(null);
    } else if (diffX < -50) {
      prevSlide();
      setTouchStartX(null);
    }
  };

  const renderCards = () => {
    if (windowWidth > 1199) {
      return (
        <>
          <LogisticCardItem country="Japan" />
          <LogisticCardItem country="South Korea" />
          <LogisticCardItem country="China" />
        </>
      );
    } else if (windowWidth < 576) {
      return (
        <div
          className="slider"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className="slider__track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <div className="slider__slide">
              <LogisticCardItem country="Japan" />
            </div>
            <div className="slider__slide">
              <LogisticCardItem country="South Korea" />
            </div>
            <div className="slider__slide">
              <LogisticCardItem country="China" />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <LogisticCardItem country="Japan" />
          <LogisticCardItem country="South Korea" />
        </>
      );
    }
  };

  return <div className="Home__main-logistic__cards">{renderCards()}</div>;
}

export default MainLogisticCards;
