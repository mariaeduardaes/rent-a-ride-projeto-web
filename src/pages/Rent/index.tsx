import { useRentCar } from "../../hooks/useRentCar";
import { formatCurrency } from "../../utils/currency";
import { getDate } from "../../utils/date";
import InputMask from "react-input-mask";
import * as S from "./styles";
import * as GS from "./../../components/styles";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

interface IRentForm {
  card_number: string;
  card_cvc: string;
  card_validity: string;
  cpf: string;
  name: string;
}

export const Rent = () => {
  const { control, handleSubmit } = useForm<IRentForm>({
    defaultValues: {
      card_number: "",
      card_cvc: "",
      card_validity: "",
      cpf: "",
      name: "",
    },
  });
  const navigate = useNavigate();

  const { carToRent, pay } = useRentCar();
  const { data: { user } } = useAuth();

  if (!carToRent) return null;

  const {
    days,
    dateWithdraw,
    dateDevolution,
    car: { id: carId, imagem, modelo, descricao, valorDiaria },
  } = carToRent;
  const dateWithdrawFormatted = new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(getDate(dateWithdraw));
  const dateDevolutionFormatted = new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(getDate(dateDevolution));
  const totalValue = days * valorDiaria;

  const onSubmit = async () => {
    await pay({
      condicoes: "",
      dataInicio: dateWithdraw,
      dataTermino: dateDevolution,
      valorTotalReserva: totalValue,
      locatario: {
        id: user.id
      },
      veiculo: {
        id: carId
      },
    });

    navigate('/minhas-reservas');
  };

  return (
    <S.Container>
      <S.Content>
        <S.Image src={imagem} />

        <form onSubmit={handleSubmit(onSubmit)} className="info">
          <div className="description">
            <S.Title>Revise as informações</S.Title>

            <S.Description>
              <span>MODELO:</span> {modelo}
            </S.Description>

            <S.Description>
              <span>DESCRIÇÃO:</span> {descricao}
            </S.Description>

            <S.Description>
              <span>VALOR DIÁRIA:</span> {formatCurrency(valorDiaria)}
            </S.Description>

            <S.Description>
              <span>RETIRADA:</span> {dateWithdrawFormatted}
            </S.Description>

            <S.Description>
              <span>DEVOLUÇÃO:</span> {dateDevolutionFormatted}
            </S.Description>

            <S.Description>
              <span>VALOR TOTAL:</span> {formatCurrency(totalValue)}
            </S.Description>
          </div>

          <div className="description">
            <S.Title>Dados de pagamento</S.Title>

            <div className="cartao">
              <GS.InputControl>
                Número do cartão
                <Controller
                  name="card_number"
                  control={control}
                  render={({ field }) => (
                    <InputMask
                      {...field}
                      type="text"
                      mask="9999 9999 9999 9999"
                    />
                  )}
                />
              </GS.InputControl>

              <GS.InputControl>
                CVC
                <Controller
                  name="card_cvc"
                  control={control}
                  render={({ field }) => (
                    <InputMask {...field} type="text" mask="999" />
                  )}
                />
              </GS.InputControl>

              <GS.InputControl>
                Validade
                <Controller
                  name="card_validity"
                  control={control}
                  render={({ field }) => (
                    <InputMask {...field} type="text" mask="99/9999" />
                  )}
                />
              </GS.InputControl>
            </div>

            <div className="cartao">
              <GS.InputControl>
                CPF
                <Controller
                  name="cpf"
                  control={control}
                  render={({ field }) => (
                    <InputMask {...field} type="text" mask="999.999.999-99" />
                  )}
                />
              </GS.InputControl>

              <GS.InputControl>
                Nome completo
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <input type="text" placeholder="" {...field} />
                  )}
                />
              </GS.InputControl>

              <button type="submit">PAGAR</button>
            </div>
          </div>
        </form>
      </S.Content>
    </S.Container>
  );
};
