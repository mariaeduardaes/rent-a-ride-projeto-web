import React from "react";
import { ProfileInfo, SettingCard } from "../../components";

import * as S from "./styles";

export const Profile = () => {

  const settingsOptions = [
    {
      id: '1',
      icon: 'src/assets/icons/bell.png',
      settingTitle: 'Notificações',
    },
    {
      id: '2',
      icon: 'src/assets/icons/credit-card.png',
      settingTitle: 'Meus cartões',
    },
    {
      id: '3',
      icon: 'src/assets/icons/user.png',
      settingTitle: 'Meus dados',
    },
    {
      id: '4',
      icon: 'src/assets/icons/terms.png',
      settingTitle: 'Termos e condições',
    },
    {
      id: '5',
      icon: 'src/assets/icons/phone.png',   
      settingTitle: 'Fale conosco',
    },
  ];

  return (
    <S.Container>
      <S.ProfileInfoContainer>
        <ProfileInfo/>
      </S.ProfileInfoContainer>
      <S.ProfileOptionsContainer>
        {settingsOptions.map((item) =>
          <SettingCard item={item}/>
        )}
      </S.ProfileOptionsContainer>
    </S.Container>
  );
};
