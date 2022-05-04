import React from "react";
import { IInput } from "../../interfaces";

export const Input = ({ value, onChange, placeholder, className }: IInput) => {
  return (
    <input
      onChange={onChange}
      value={value}
      type="text"
      className={`${className}`}
      placeholder={placeholder}
    />
  );
};
