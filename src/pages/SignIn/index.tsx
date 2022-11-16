import * as S from "./styles";
import * as GS from "../../components/styles";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { ISignIn } from "../../interfaces/signIn";

export const SignIn = () => {
  const { signIn } = useAuth();
  const { register, handleSubmit } = useForm<ISignIn>();
  const navigate = useNavigate();

  const onSubmit = async (values: ISignIn) => {
    await signIn(values);

    navigate('/');
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <div className="header">
          <h1>Conecte-se a sua conta</h1>
        </div>

        <div>
          <GS.InputControl>
            E-mail
            <input
              type="e-mail"
              placeholder="Digite seu e-mail"
              {...register("email")}
            />
          </GS.InputControl>

          <GS.InputControl className="margin-top-4">
            Senha
            <input
              type="password"
              placeholder="******"
              {...register("password")}
            />
          </GS.InputControl>
        </div>

        <div>
          <Link to="/cadastrar">Cadastre-se</Link>

          <button type="submit">Entrar</button>
        </div>
      </S.Form>
    </S.Container>
  );
};
