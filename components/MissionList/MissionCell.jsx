import React from 'react';
import * as S from './MissionCellCss';

export default function MissionCell() {
  return (
    <S.MissionCellContainer>
      <S.MissionCellBtn>
        <S.MissionName>과제이름</S.MissionName>
        <S.MissionDate>2020.20.20</S.MissionDate>
      </S.MissionCellBtn>
    </S.MissionCellContainer>
  );
}
