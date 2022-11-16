import { createContext } from "react";
import { ISignIn } from "../interfaces/signIn";
import { IUserSigned } from "../interfaces/user";

interface IAuthContext {
  data: IUserSigned;
  signIn: (data: ISignIn) => Promise<boolean>;
  signOut: () => void;
}

const AuthContext = createContext({} as IAuthContext);

export default AuthContext;
