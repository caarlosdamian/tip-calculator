import React, { useEffect, useRef, useState } from "react";
import { Input } from "../Input/Input";
import dollar from "../../images/icon-dollar.svg";
import person from "../../images/icon-person.svg";
import "./Card.scss";
import { Button } from "../Button/Button";
import { buttonData } from "../../utils/data";

export const Card = () => {
  const [people, setPeople] = useState<number>(2);
  const [tip, setTip] = useState<number>(0);
  const [bill, setBill] = useState<number>(0);
  const [tipPer, setTipPer] = useState<number>(0.0);
  const [amountPer, setamountPer] = useState<number>(0.0);
  const [custom, setCustom] = useState<number>(0);

  const inputBill = useRef()

  const calculateAmounts = () => {
    if (tip !== 0 || (custom !== 0 && bill !== 0 && people !== 0)) {
      let tipPerson = custom !== 0 ? (bill * custom) / 100 : bill * tip;
      let billPer = bill / people;
      setTipPer(tipPerson / 2);
      setamountPer(billPer);
    }
  };

  const resetStates = () => {
    setBill(0);
    setPeople(1);
    setTip(0);
    setTipPer(0);
    setamountPer(0);
    setCustom(0);
  };

  useEffect(() => {
    calculateAmounts();
  }, [people, tip, bill, custom]);

  return (
    <div className="card__container">
      <div className="left__wrapper">
        <div className="top__wrapper">
          <span className="card__span">Bill</span>
          <Input setValue={setBill} icon={dollar}   type="number" />
        </div>
        <div className="middle__wrapper">
          <span className="card__span">Select Tip %</span>
          <div className="middle__grid">
            {buttonData.map((item) => (
              <Button
                key={item.value}
                label={item.label}
                value={item.value}
                setValue={setTip}
              />
            ))}
            <input
              type="number"
              className="middle__grid-input"
              placeholder="Custom"
              onChange={(e) => setCustom(parseInt(e.target.value))}
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

          <Input
            icon={person}
            people={people}
            clasName="red-input"
            type="number"
            setValue={setPeople}
          />
        </div>
      </div>
      <div className="right__wrapper">
        <div className="label__container">
          <div className="label__left-container">
            <span className="label__header">Tip Amount</span>
            <span className="label__subtitle">/ person</span>
          </div>
          <h2 className="label__calcl">${tipPer}</h2>
        </div>
        <div className="label__container">
          <div className="label__left-container">
            <span className="label__header">Total</span>
            <span className="label__subtitle">/ person</span>
          </div>
          <h2 className="label__calcl">${amountPer}</h2>
        </div>
        <button className="right__button" onClick={resetStates}>
          RESET
        </button>
      </div>
    </div>
  );
};
