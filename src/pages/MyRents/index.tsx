// import { XCircle } from "phosphor-react";
import { useEffect, useState } from "react";
// import { StatusEnum } from "../../enums/rent";
import { formatCurrency } from "../../utils/currency";
import { formatDateBR } from "../../utils/date";
import { get } from '../../services/RentService';
import * as S from "./styles";

interface IRent {
  id: number;
  dataInicio: string;
  dataTermino: string;
  valorTotalReserva: number;
  veiculo: {
    id: number;
    tipoVeiculo: string;
    marca: string;
    modelo: string;
    anoModelo: number;
    anoFabricacao: number;
    cilindradas: number;
    tipoCombustivel: string;
    quilometragem: number;
    tipoTransmissao: string;
    descricao: string;
    opcionais: string;
    placa: string;
    cor: string;
    imagem: string;
    valorDiaria: number;
  }
}

// const StatusCodeToLabel = {
//   [StatusEnum.AGUARDANDO_RETIRADA]: "Aguardando retirada",
//   [StatusEnum.EM_ANDAMENTO]: "Em andamento",
//   [StatusEnum.CONCLUIDA]: "Concluída",
//   [StatusEnum.CANCELADA]: "Cancelada",
// };

export const MyRents = () => {
  const [rents, setRents] = useState<IRent[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await get();

      setRents(response);
    };

    loadData();
  }, []);

  const handleCancel = () => {
    const response = window.confirm('Deseja realmente cancelar a reserva? Essa ação não tem volta.');

    console.log(response);
  };

  return (
    <S.Container>
      {rents.map((rent, index) => (
        <S.Card key={index}>
          <img src={rent.veiculo.imagem} />

          <S.Info>
            <div className="car">
              <h1>
                {rent.veiculo.marca} {rent.veiculo.modelo}
              </h1>
              <p>
                {rent.veiculo.tipoVeiculo} ● {rent.veiculo.tipoTransmissao} ● {rent.veiculo.tipoCombustivel} ●
                KM {rent.veiculo.quilometragem}
              </p>

              <p>
                <span>Retirada em:</span> {formatDateBR(new Date(rent.dataInicio).getTime())}
              </p>
              <p>
                <span>Devolução em:</span> {formatDateBR(new Date(rent.dataTermino).getTime())}
              </p>
              <p>
                <span>Valor total pago:</span> {formatCurrency(rent.valorTotalReserva)}
              </p>
            </div>

            {/* <div className="rent">
              {car.status === StatusEnum.AGUARDANDO_RETIRADA && (
                <button type="button" onClick={handleCancel}>
                  <XCircle size={32} />
                </button>
              )}

              <div></div>

              <S.LabelStatus status={car.status}>
                {StatusCodeToLabel[car.status as StatusEnum]}
              </S.LabelStatus>
            </div> */}
          </S.Info>
        </S.Card>
      ))}
    </S.Container>
  );
};
