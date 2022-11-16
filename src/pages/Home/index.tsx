import React, { useState, useEffect } from "react";
import * as S from "./styles";
import banner from "../../assets/images/banner.jpg";
import { Card } from "../../components";
import * as CarService from "../../services/CarService";
import { ICar } from "../../interfaces/car";

export const Home = () => {
  const [cars, setCars] = useState<ICar[]>([]);

  useEffect(() => {
    CarService.get()
    .then(convertedResponse => setCars(convertedResponse));
  }, []);

  return (
    <S.Container>
      <S.Banner src={banner} alt="carro" />
      <S.Title>Explore suas opções</S.Title>
      <S.Cards>
        {cars.map((car) => (
          <Card key={car.id} car={car}/>
        ))}
      </S.Cards>
    </S.Container>
  );
};
