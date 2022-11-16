import React from "react";
import * as S from "./styles";

export const ProfileInfo = () => {
  return (
    <S.Container>
      <S.ProfileInfo>
          <S.ProfileImage src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" alt="Ícone da opção"/>
          <S.ProfileTextLine>Olá, Maria!</S.ProfileTextLine>
          <S.ProfileTextLine>mariaeduarda@gmail.com</S.ProfileTextLine>
          <S.ProfileTextLine>
            <S.LogoutText>Não é você?&nbsp;</S.LogoutText>
            <S.LogoutText><S.LogoutButton href="">Sair</S.LogoutButton></S.LogoutText>
          </S.ProfileTextLine>
        </S.ProfileInfo>
    </S.Container>
  );
};
