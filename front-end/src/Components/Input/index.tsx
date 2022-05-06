import React from "react";
import { IInput } from "../../interfaces";

export const Input = ({
  names,
  type,

  value,
  onChange,
  placeholder,
  className,
}: IInput) => {
  return (
    <input
      name={names}
      onChange={onChange}
      value={value}
      type={type}
      className={`${className}`}
      placeholder={placeholder}
    />
  );
};
