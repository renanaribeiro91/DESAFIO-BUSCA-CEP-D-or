import React from "react";
import { Ibutton } from "../../interfaces";

export const Button = ({ children, className, click }: Ibutton) => {
  return (
    <button className={`${className}`} onClick={click}>
      {children}
    </button>
  );
};
