"use client";
import React, { useEffect, useState } from "react";
import "@/styles/Home/MainQuestions.scss";
import MainQuestionsItem from "./MainQuestionsItem";

function MainQuestions() {
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
  const text = [
    {
      head: "Какие виды транспорта мы используем?",
      description:
        "Мы предлагаем международные перевозки грузов с использованием морского, авиационного и автомобильного транспорта в зависимости от потребностей клиента.",
    },
    {
      head: "Каковы сроки доставки груза из Китая?",
      description:
        "Мы предлагаем международные перевозки грузов с использованием морского, авиационного и автомобильного транспорта в зависимости от потребностей клиента.",
    },
    {
      head: "Какие документы необходимо предоставить?",
      description:
        "Мы предлагаем международные перевозки грузов с использованием морского, авиационного и автомобильного транспорта в зависимости от потребностей клиента.",
    },
    {
      head: "Как рассчитывается стоимость международной перевозки груза?",
      description:
        "Мы предлагаем международные перевозки грузов с использованием морского, авиационного и автомобильного транспорта в зависимости от потребностей клиента.",
    },
    {
      head: "В каких странах мы работаем?",
      description:
        "Мы предлагаем международные перевозки грузов с использованием морского, авиационного и автомобильного транспорта в зависимости от потребностей клиента.",
    },
  ];
  return (
    <>
      {windowWidth > 767 && (
        <div className="MainQuestions">
          <div className="container">
            <div className="MainQuestions__container">
              <div className="MainQuestions__container-h1">
                <h1>Вопросы и ответы</h1>
              </div>

              <div className="MainQuestions__container-items">
                {text.map((item, index) => (
                  <MainQuestionsItem
                    key={index}
                    head={item.head}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MainQuestions;
