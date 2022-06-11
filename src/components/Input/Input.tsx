import React from "react";
import "./Input.scss";

interface Props {
  icon: string;
  onChange?: () => {};
  clasName?:string;
  people?:number;
}

export const Input = ({ icon,clasName,people }: Props) => {
  return (
    <div className={`input__container ${people === 0 && clasName || ''}`}>
      <img src={icon} alt={icon} className="input__icon" />
      <input className='input__number'  placeholder="0" />
    </div>
  );
};
