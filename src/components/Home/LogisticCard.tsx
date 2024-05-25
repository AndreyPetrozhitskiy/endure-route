"use client";
import Image from "next/image";
import "./../../styles/components/LogisticCard.scss";
import React, { useEffect, useState } from "react";
// Icons
import greyChevronImg from "../../../public/Icon/chevron-grey.svg";
import arrowRigth from "../../../public/Icon/arrow-rigth.svg";

import Link from "next/link";
interface Props {
  country: string;
}
interface SelectCountry {
  country: string;
  text: string;
  photo: string;
}
function LogisticCard({ country }: Props) {
  const countryText = [
    {
      country: "Japan",
      text: "Японии",
      photo: "/flugs/Japan.svg",
    },
    {
      country: "South Korea",
      text: "Южной Кореи",
      photo: "/flugs/South Korea.svg",
    },
    {
      country: "China",
      text: "Китая",
      photo: "/flugs/China.svg",
    },
  ];

  const europeCountry = [
    {
      text: "Великобритания",
      photo: "/flugs/United Kingdom.svg",
    },
    {
      text: "Бельгия",
      photo: "/flugs/Belgium.svg",
    },
    {
      text: "Германия",
      photo: "/flugs/Germany.svg",
    },
    {
      text: "Италия",
      photo: "/flugs/Italy.svg",
    },
  ];

  const otherCountry = [
    {
      text: "Австралия",
      photo: "/flugs/Australia.svg",
    },
  ];

  const [selectCountry, setSelectCountry] = useState<SelectCountry>({
    country: "",
    text: "",
    photo: "",
  });
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      // Очистка эффекта при размонтировании компонента
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  useEffect(() => {
    const foundCountry = countryText.find((item) => item.country === country);
    if (foundCountry) {
      setSelectCountry(foundCountry);
    }
  }, []);
  return (
    <div className="LogisticCard">
      <div className="LogisticCard__header">
        <div className="LogisticCard__header-text">
          <Image
            src={selectCountry.photo}
            alt={selectCountry.text}
            width={28}
            height={28}
          />
          <p>Из {selectCountry.text}</p>
        </div>

        {windowWidth > 991 ? (
          <button>Тарифы</button>
        ) : (
          <Image
            src={greyChevronImg}
            alt="greyChevronImg"
            className="LogisticCard__header-chevron"
          />
        )}
      </div>

      <div className="LogisticCard__main">
        <div className="LogisticCard__main-link">
          <Image src={greyChevronImg} alt="greyChevronImg" />
          <Link href="/">В Европу</Link>
        </div>

        <div className="LogisticCard__main-countries">
          {europeCountry.map((item, itemIndex) => (
            <div className="LogisticCard__main-countries__item" key={itemIndex}>
              {windowWidth > 991 && <Image src={arrowRigth} alt="arrow" />}
              <Image
                src={item.photo}
                alt={item.text}
                width={windowWidth > 991 ? 28 : 24}
                height={windowWidth > 991 ? 28 : 24}
              />
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="LogisticCard__main-link">
          <Image src={greyChevronImg} alt="greyChevronImg" />
          <Link href="/">В другие страны</Link>
        </div>

        <div className="LogisticCard__main-countries">
          {otherCountry.map((item, itemIndex) => (
            <div className="LogisticCard__main-countries__item" key={itemIndex}>
              {windowWidth > 991 && <Image src={arrowRigth} alt="arrow" />}
              <Image
                src={item.photo}
                alt={item.text}
                width={windowWidth > 991 ? 28 : 24}
                height={windowWidth > 991 ? 28 : 24}
              />
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="LogisticCard__main-buttons">
          {windowWidth > 992 ? (
            <>
              <button>Поставщики</button>
              <button>Доставка автомобилей</button>
            </>
          ) : null}

          {windowWidth < 991 && (
            <>
              <button>Тарифы</button>
              <button>Поставщики</button>
            </>
          )}

          {windowWidth < 991 && <button>Тарифы на перевозку авто</button>}
        </div>
      </div>
    </div>
  );
}

export default LogisticCard;
