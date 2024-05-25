import React from "react";
import "@/styles/Home/textBlockHome.scss";
interface Props {
  H1: string;
  P: string;
  PRICE: {
    P: string;
    H2: string;
  } | null;
}
function TextBlockHome({ H1, P, PRICE }: Props) {
  return (
    <div className="TextBlockHome">
      <div className="TextBlockHome__H1">
        <h1>{H1}</h1>
      </div>

      <div className="TextBlockHome__P">
        <p>{P}</p>
      </div>

      {PRICE && (
        <div className="TextBlockHome__PRICE">
          <p>{PRICE.P}</p>
          <h2>{PRICE.H2}</h2>
        </div>
      )}
    </div>
  );
}

export default TextBlockHome;
