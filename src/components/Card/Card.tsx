import React, { useState } from "react";
import { Input } from "../Input/Input";
import dollar from "../../images/icon-dollar.svg";
import person from "../../images/icon-person.svg";
import "./Card.scss";
import { Button } from "../Button/Button";
import { buttonData } from "../../utils/data";

export const Card = () => {
  const [people, setPeople] = useState<number>(2);
  const [tip, setTip] = useState<number>();
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
          <input
            type="number"
            className="middle__grid-input"
            placeholder="Custom"
          />
        </div>
      </div>
      <div className="bottom__wrapper">
        <div className="bottom_wrapper-container">
          <span className="card__span">Number of People</span>
          {people === 0 && <span className="card__span--error">Can’t be zero</span>}
        </div>

        <Input icon={person} people={people} clasName="red-input" />
      </div>
    </div>
  );
};
