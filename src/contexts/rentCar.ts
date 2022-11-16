import { createContext } from "react";
import { ICarToRent } from "../interfaces/carToRent";
import { IRent } from "../interfaces/rent";

interface RentCarContextInterface {
  carToRent: ICarToRent | null;
  rent(car: ICarToRent): void;
  remove(): void;
  pay(data: IRent): void;
}

const RentCarContext = createContext({} as RentCarContextInterface);

export default RentCarContext;
