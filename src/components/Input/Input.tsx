import React, { Dispatch, SetStateAction } from "react";
import "./Input.scss";

interface Props {
  icon: string;
  setValue: Dispatch<SetStateAction<any>>;
  clasName?:string;
  people?:number;
  type:string;
}

export const Input = ({ icon,clasName,people ,setValue,type}: Props) => {
  return (
    <div className={`input__container ${people === 0 && clasName || ''}`}>
      <img src={icon} alt={icon} className="input__icon" />
      <input type={type}  onChange={(e)=>setValue(e.target.value)} className='input__number'  placeholder="0" />
    </div>
  );
};
