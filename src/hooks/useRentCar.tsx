import { ReactNode, useContext, useState } from 'react';
import RentCarContext from '../contexts/rentCar';
import { ICarToRent } from '../interfaces/carToRent';
import { IRent } from '../interfaces/rent';
import { payRent } from '../services/CarService';

interface RentCarProviderProps {
  children: ReactNode;
}

export const useRentCar = () => {
  const context = useContext(RentCarContext);

  if (!context) throw new Error('useRentCar must be used within a RentCarProvider');

  return context;
}

export const RentCarProvider = ({ children }: RentCarProviderProps) => {
  const [carToRent, setCarToRent] = useState<ICarToRent | null>(null);

  const rent = (newCarToRent: ICarToRent) => {
    setCarToRent(newCarToRent);
  };

  const remove = () => {
    setCarToRent(null);
  };

  const pay = async (data: IRent) => {
    await payRent(data);

    return true;
  };

  return <RentCarContext.Provider value={{ carToRent, rent, remove, pay }}>{children}</RentCarContext.Provider>
}