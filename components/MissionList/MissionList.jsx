import React from 'react';
import * as S from './MissionListCss';
import MissionCell from './MissionCell';
import {StyledUpperImage} from './MissionListCss';

export default function MissionList({navigation}) {
  const upperImage = require('../../assets/images/testImage.jpeg');

  const goMissionCreate = () => {};

  return (
    <S.StyledContainer>
      {/* 상단 이미지 */}
      <S.StyledUpperImageContainer>
        <StyledUpperImage source={upperImage}></StyledUpperImage>
      </S.StyledUpperImageContainer>
      {/* 미션 생선 버튼*/}
      <S.StyledMissionCreateBtnContainer>
        <S.MissionCreateBtn onPress={() => alert('test')}>
          <S.MissionCreateBtnText>새로운 과제 생성</S.MissionCreateBtnText>
        </S.MissionCreateBtn>
      </S.StyledMissionCreateBtnContainer>
      {/* 미션 목록 */}
      <S.StyledMissionListContainer>
        {/* 셀 단위 */}
        <MissionCell />
        <MissionCell />
        <MissionCell />
        <MissionCell />
        <MissionCell />
        <MissionCell />
        <MissionCell />
        <MissionCell />
      </S.StyledMissionListContainer>
    </S.StyledContainer>
  );
}
