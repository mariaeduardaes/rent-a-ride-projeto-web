import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { ICar } from "../../interfaces/car";
import * as S from "./styles";

interface CardProps {
  car: ICar;
}

export const Card = ({
  car: { id, modelo, valorDiaria, descricao, imagem },
}: CardProps) => {
  const {
    data: { signed },
  } = useAuth();
  const navigate = useNavigate();
  

  const handleNavigate = (id: number) => {
    if (!signed) return;
    
    navigate(`carros/${id}`);
  };

  return (
    <>
      <S.Container onClick={() => handleNavigate(id)}>
        <S.Image src={imagem} alt={"Carro"} />
        <S.ContainerSubtitle>
          <S.Subtitle>{modelo}</S.Subtitle>
          <S.Subtitle>{valorDiaria}</S.Subtitle>
        </S.ContainerSubtitle>
        <S.Description>{descricao}</S.Description>
      </S.Container>
    </>
  );
};
