import Header from "@/components/header/header";
import "./../styles/Home/home.scss";
import TextBlockHome from "@/components/Home/textBlockHome";
import CalculatePriceHome from "@/components/Home/calculatePriceHome";
import LogisticCard from "@/components/Home/LogisticCard";
import Link from "next/link";

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
        <div className="Home__main">
          <div className="container">
            <div className="Home__main-logistic">
              <h2>Страны, из которых мы можем отправить груз</h2>

              <div className="Home__main-logistic__cards">
                <LogisticCard country="Japan" />
                <LogisticCard country="South Korea" />
                <LogisticCard country="China" />
              </div>
              <div className="Home__main-logistic__footer">
                <button>Все направления</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
