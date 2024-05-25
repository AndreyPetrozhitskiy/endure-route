"use client";
import React, { useEffect, useState, useLayoutEffect } from "react";
import "./../../styles/components/header/header.scss";
import Image from "next/image";
import LogoImageExtraLarge from "./../../../public/Logo//Type=White,Device=Desktop.svg";
import LogoImageLarge from "./../../../public/Logo/Type=Black,Device=M-XS.svg";
import search from "./../../../public/Icon/search-alt.png";
import user from "./../../../public/Icon/user-alt-1.png";

import Link from "next/link";
import LanguageSwitch from "./languageSwicth/languageSwitch";

function Header() {
  const text = {
    Extra_Large: {
      suppliers: "Найти поставщика",
      price: "Маршруты и цены",
      track: "Отследить",
      enter: "Войти",
      signme: "Регистрация",
    },
    Large: {
      suppliers: "Поставщики",
      price: "Цены",
    },
  };

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Проверяем, что находимся на клиенте
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

  return (
    <div className="base">
      <div className="container">
        <div className="Header">
          {windowWidth > 1199.98 ? (
            <div className="Header__ExtraLarge">
              <div className="Header__container">
                <Image src={LogoImageExtraLarge} alt="LogoImageExtraLarge" />
                <Link href="/">{text.Extra_Large.suppliers}</Link>
                <Link href="/">{text.Extra_Large.price}</Link>
              </div>

              <div className="Header__container">
                <Link href="/">{text.Extra_Large.track}</Link>
                <Link href="/">{text.Extra_Large.enter}</Link>
                <Link href="/">{text.Extra_Large.signme}</Link>
                <LanguageSwitch />
              </div>
            </div>
          ) : (
            <div className="Header__Large">
              <div className="Header__container">
                <Image src={LogoImageLarge} alt="LogoImageLarge" />
                <Link href="/">{text.Large.suppliers}</Link>
                <Link href="/">{text.Large.price}</Link>
              </div>

              <div className="Header__container">
                <Link href="/">
                  <Image src={search} alt="search" />
                </Link>
                <Link href="/">
                  <Image src={user} alt="user" />
                </Link>
                <LanguageSwitch />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
