import { ReactNode, useContext, useState } from "react";
import AuthContext from "../contexts/auth";
import { ISignIn } from "../interfaces/signIn";
import { IUserSigned } from "../interfaces/user";
import { signIn as signInApi } from "../services/UserService";

interface AuthProviderProps {
  children: ReactNode;
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth must be used within an AuthProvider");

  return context;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<IUserSigned>({} as IUserSigned);

  const signIn = async (data: ISignIn) => {
    try {
      const response = await signInApi(data);

      setData({ signed: true, user: response });

      return true;
    } catch (err) {
      console.log(err);

      return false;
    }
  };

  const signOut = () => {
    setData({} as IUserSigned);
  };

  return (
    <AuthContext.Provider value={{ data, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
