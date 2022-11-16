import { User } from "phosphor-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import * as S from "./styles";

export const Header = () => {
  const {
    data: { signed, user },
    signOut,
  } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate("/");
  };

  return (
    <S.Container>
      <S.Content>
        <S.Logo to="/">Rent-a-Ride</S.Logo>

        {!signed ? (
          <S.SignIn to="/entrar">Entrar</S.SignIn>
        ) : (
          <S.LoggedUser>
            <div>
              <User size={32} color="#fff" />
            </div>
            <div>
              <p>
                Olá,
                <strong>
                  {" "}
                  {user.nome} {user.sobrenome}
                </strong>
              </p>

              <div>
                <Link to="/minhas-reservas">Minhas reservas</Link>

                <button type="button" onClick={handleSignOut}>
                  Finalizar seção
                </button>
              </div>
            </div>
          </S.LoggedUser>
        )}
      </S.Content>
    </S.Container>
  );
};
