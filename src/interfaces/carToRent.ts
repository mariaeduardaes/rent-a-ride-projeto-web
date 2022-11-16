import { ICar } from "./car";

export interface ICarToRent {
  car: ICar;
  dateWithdraw: string;
  dateDevolution: string;
  days: number;
}