import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ICar } from "../../interfaces/car";
import * as S from "./styles";
import * as GS from "../../components/styles";
import * as CarService from "../../services/CarService";
import { useRentCar } from "../../hooks/useRentCar";
import { formatDate, getDateTime } from "../../utils/date";
import { formatCurrency } from "../../utils/currency";

const CALC_ONE_DAY = 24 * 60 * 60 * 1000;

export const Car = () => {
  const { rent } = useRentCar();
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState<ICar>({} as ICar);

  const [dates, setDates] = useState(() => {
    return {
      start: formatDate(Date.now()),
      end: formatDate(Date.now() + CALC_ONE_DAY),
      days: 1,
    };
  });

  useEffect(() => {
    if (!id) return;

    const loadData = async () => {
      const response = await CarService.getById(id);
      setCar(response);
    };

    loadData();
  }, [id]);

  const handleChangeDates = (field: string, date: string) => {
    setDates((prevState) => {
      const rules = {
        start: () => {
          const startDateTime = getDateTime(date);
          const endDateTime = getDateTime(prevState.end);

          return startDateTime < endDateTime
            ? {
                start: formatDate(startDateTime),
                end: prevState.end,
              }
            : {
                start: date,
                end: formatDate(startDateTime + CALC_ONE_DAY),
              };
        },
        end: () => {
          const startDateTime = getDateTime(prevState.start);
          const endDateTime = getDateTime(date);

          return startDateTime < endDateTime
            ? {
                start: prevState.start,
                end: formatDate(endDateTime),
              }
            : {
                start: formatDate(endDateTime - CALC_ONE_DAY),
                end: date,
              };
        },
      };

      const { start, end } = rules[field as "start" | "end"]();

      return {
        start,
        end,
        days: (getDateTime(end) - getDateTime(start)) / CALC_ONE_DAY,
      };
    });
  };

  const handleRentACar = () => {
    rent({
      car,
      dateWithdraw: dates.start,
      dateDevolution: dates.end,
      days: dates.days,
    });

    navigate("/alugar");
  };

  return (
    <S.Container>
      <S.Content>
        <S.Image src={car.imagem} />

        <div className="info">
          <div className="description">
            <S.Title>{car?.modelo}</S.Title>
            <S.Subtitle>{car?.descricao}</S.Subtitle>
            <S.Subtitle>
              VALOR DA DIÁRIA: {formatCurrency(car?.valorDiaria)}
            </S.Subtitle>
          </div>

          <div className="rent">
            <GS.InputControl>
              Retirar em
              <input
                type="date"
                value={dates.start}
                onChange={(event) =>
                  handleChangeDates("start", event.target.value)
                }
              />
            </GS.InputControl>

            <GS.InputControl>
              Devolver em
              <input
                type="date"
                value={dates.end}
                onChange={(event) =>
                  handleChangeDates("end", event.target.value)
                }
              />
            </GS.InputControl>

            <GS.InputControl>
              Total
              <input
                type="text"
                value={formatCurrency(dates.days * car.valorDiaria)}
                disabled
              />
            </GS.InputControl>
          </div>
          
          <button type="button" onClick={handleRentACar}>
            Alugar carro
          </button>
        </div>
      </S.Content>
    </S.Container>
  );
};
