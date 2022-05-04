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
  value: any;
  onChange: any;
  placeholder: string;
  className?: string;
}
