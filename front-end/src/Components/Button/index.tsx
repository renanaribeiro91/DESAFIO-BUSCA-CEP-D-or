import React, { ReactNode } from "react";

interface Ibutton {
  click: any;
  className?: string;
  children?: ReactNode;
}

export const Button = ({ children, className, click }: Ibutton) => {
  return (
    <button className={`${className}`} onClick={click}>
      {children}
    </button>
  );
};
