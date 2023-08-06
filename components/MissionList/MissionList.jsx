import React from 'react';
import * as S from './MissionListCss';
import MissionCell from './MissionCell';
import {StyledUpperImage} from './MissionListCss';

export default function MissionList({navigation}) {
  // 상단 이미지
  const upperImage = require('../../assets/images/Climbing_wall.jpg');

  // 미션 목록 데이터

  // Navigation
  const goMissionCreate = () => {
    navigation.navigate('StartScreen'); // FIXME 문제 생성 화면으로 이동
  };

  return (
    <S.StyledContainer>
      {/* 상단 이미지 */}
      <S.StyledUpperImageContainer>
        <StyledUpperImage source={upperImage}></StyledUpperImage>
      </S.StyledUpperImageContainer>
      {/* 미션 생선 버튼*/}
      <S.StyledMissionCreateBtnContainer>
        <S.MissionCreateBtn onPress={goMissionCreate}>
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
