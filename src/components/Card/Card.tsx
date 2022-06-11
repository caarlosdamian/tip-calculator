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
      <div className="left__wrapper">
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
            {people === 0 && (
              <span className="card__span--error">Can’t be zero</span>
            )}
          </div>

          <Input icon={person} people={people} clasName="red-input" />
        </div>
      </div>
      <div className="right__wrapper">
        <div className="label__container">
          <div className="label__left-container">
            <span className="label__header">Tip Amount</span>
            <span className="label__subtitle">/ person</span>
          </div>
          <h2 className="label__calcl">$4.27</h2>
        </div>
        <div className="label__container">
          <div className="label__left-container">
            <span className="label__header">Total</span>
            <span className="label__subtitle">/ person</span>
          </div>
          <h2 className="label__calcl">$4.27</h2>
        </div>
        <button className="right__button">RESET</button>
      </div>
    </div>
  );
};
