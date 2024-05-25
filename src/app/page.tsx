import Header from "@/components/header/header";
import "./../styles/Home/home.scss";
import TextBlockHome from "@/components/Home/textBlockHome";
import CalculatePriceHome from "@/components/Home/calculatePriceHome";

import Link from "next/link";

import MainLogisticCards from "@/components/Home/MainLogisticCards";
import SupplierBlock from "@/components/Home/SupplierBlock";
import { Container } from "postcss";
import MainQuestions from "@/components/Home/MainQuestions";

export default function Home() {
  const text = {
    H1: "Международные грузоперевозки",
    P:
      "Предлагаем услуги по перевозке грузов по маршрутам из Азии и Австралии в Европу по выгодным тарифам. Помогаем найти поставщиков и проверить товар перед отправкой",
    PRICE: {
      P: "Перевозки от",
      H2: "160 000-200 000 ₽",
    },
  };

  const categoriesCard = [
    {
      name: "Мебель",
      photo: "/photo/Sofa.png",
    },
    {
      name: "Электроника",
      photo: "/photo/Notebook.png",
    },
    {
      name: "Одежда",
      photo: "/photo/Switer.png",
    },
    {
      name: "Автомобили",
      photo: "/photo/car.png",
    },
    {
      name: "Спецтехника",
      photo: "/photo/Excavator.png",
    },
    {
      name: "Все категории",
      photo: "/photo/Blocks.png",
    },
  ];

  // Home Page
  return (
    <div className="base">
      <div className="Home">
        {/* Шапка */}
        <div className="Home__header">
          <Header />
          <div className="container">
            <div className="Home__container">
              <div className="Home__header-TextBlock">
                <TextBlockHome H1={text.H1} P={text.P} PRICE={text.PRICE} />
              </div>
              <div className="Home__header-calculator">
                <CalculatePriceHome />
              </div>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="Home__main">
          <div className="container">
            <div className="Home__main-logistic">
              <h2>Страны, из которых мы можем отправить груз</h2>

              <MainLogisticCards />
              <div className="Home__main-logistic__footer">
                <button>Все направления</button>
              </div>
            </div>

            <div className="Home__main-searchSupplier">
              <h2>Поможем найти поставщика</h2>
              {categoriesCard.map((item, index) => (
                <SupplierBlock
                  key={index}
                  name={item.name}
                  photo={item.photo}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="Home__questions">
          <MainQuestions />
        </div>
      </div>
    </div>
  );
}
