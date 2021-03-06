import { ReactNode } from "react";

export interface ICep {
  status?: number;
  ok?: boolean;
  code: string;
  state: string;
  city: string;
  district: string;
  address: string;
  statusText?: string;
}
export interface IInput {
  names?: string;
  type?: string;
  value: any;
  onChange: any;
  placeholder: string;
  className?: string;
}
export interface Ibutton {
  click?: any;
  className?: string;
  children?: ReactNode;
}
