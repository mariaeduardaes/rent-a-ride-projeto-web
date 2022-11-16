export interface User {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  dataNascimento: string;
  telefone: string;
  numeroCNH: string;
}

export interface IUserSigned {
  user: User;
  signed: boolean;
}