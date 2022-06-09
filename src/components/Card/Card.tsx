import React from "react";
import { Input } from "../Input/Input";
import dollar from "../../images/icon-dollar.svg";
import "./Card.scss";
import { Button } from "../Button/Button";
import { buttonData } from "../../utils/data";

export const Card = () => {
  return (
    <div className="card__container">
      <div className="top__wrapper">
        <span className="card__span">Bill</span>
        <Input icon={dollar} />
      </div>
      <div className="middle__wrapper">
        <span className="card__span">Select Tip %</span>
        <div className="middle__grid">
          {buttonData.map((item) => (
            <Button label={item.label} />
          ))}
            <input type="number" className="middle__grid-input" placeholder="Custom"/>
        </div>
      </div>
    </div>
  );
};
