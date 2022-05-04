import React from "react";
import { FcSearch } from "react-icons/fc";

interface Ibutton {
  click: any;
  className?: string;
}

export const Button = ({ className, click }: Ibutton) => {
  return (
    <button className={`${className}`} onClick={click}>
      <FcSearch size="25" />
    </button>
  );
};
