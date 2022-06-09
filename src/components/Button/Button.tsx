import React, { ButtonHTMLAttributes } from "react";
import "./Button.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}
export const Button = ({ label,  }: Props) => {
  return <button className="button" >{label}</button>;
};
