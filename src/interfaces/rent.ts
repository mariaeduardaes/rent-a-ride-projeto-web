export interface IRent {
  dataInicio: string;
  dataTermino: string;
  condicoes: string;
  valorTotalReserva: number;
  locatario: {
    id: number;
  };
  veiculo: {
    id: number;
  };
}