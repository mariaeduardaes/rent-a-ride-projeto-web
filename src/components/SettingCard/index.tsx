import React from "react";
import * as S from "./styles";


export const SettingCard = ( { item } : { item:object } ) => {

  function handleSettingSelection() {

    if (item.id === '2') {
      console.log('meus cartões');
    } else if(item.id === '3') {
      console.log('meus dados');
    }

  }

  return (
    <S.SettingContainer onClick={handleSettingSelection}>
      <S.Image src={item.icon} alt="Ícone da opção"/>
      <S.SettingText>{item.settingTitle}</S.SettingText>
      <S.Image src="src/assets/icons/setting-arrow.png" alt="Ícone da opção"/>
    </S.SettingContainer>
  );
};
