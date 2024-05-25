"use client";
import React, { useEffect, useState } from "react";
import "@/styles/Home/SupplierBlock.scss";
import Image from "next/image";
import arrow_circle from "../../../public/Icon/arrow-circle.svg";

interface Props {
  name: string;
  photo: string;
}
function SupplierBlock({ name, photo }: Props) {
  const [windowWidth, setWindowWidth] = useState(0);

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
  return (
    <div className="SupplierBlock">
      <Image src={photo} alt={name} width={250} height={250}/>
      <div className="SupplierBlock__link">
        <p>{name}</p>
        {windowWidth > 992 && <Image src={arrow_circle} alt="arrow_circle" />}
      </div>
    </div>
  );
}

export default SupplierBlock;
