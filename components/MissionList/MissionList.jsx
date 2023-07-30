import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as S from './MissionListCss';
import MissionCell from './MissionCell';

export default function MissionList({navigation}) {
  return (
    <S.StyledContainer>
      {/* 상단 이미지 */}
      <S.StyledUpperImageContainer>
        <Image
          source={require('../../assets/images/testImage.jpeg')}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
          }}></Image>
      </S.StyledUpperImageContainer>
      {/* 미션 생선 버튼*/}
      <S.StyledMissionCreateBtnContainer>
        <S.MissionCreateBtn onPress={() => alert('test')}>
          <S.MissionCreateBtnText>새로운 과제 생성</S.MissionCreateBtnText>
        </S.MissionCreateBtn>
      </S.StyledMissionCreateBtnContainer>
      {/* 미션 목록 */}
      <S.StyledMissionListContainer>
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
