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

function MissionCell() {
  return (
    <View
      style={{
        margin: 10,
        height: 80,
        backgroundColor: 'yellow',
        borderRadius: 10,
      }}>
      <TouchableOpacity
        style={{
          paddingRight: 10,
          height: '100%',
          width: '95%',
          backgroundColor: 'orange',
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}>
        <Text style={{position: 'absolute', left: '5%', top: '10%'}}>
          과제이름
        </Text>
        <Text style={{position: 'absolute', right: '5%', bottom: '10%'}}>
          2020.20.20
        </Text>
      </TouchableOpacity>
    </View>
  );
}

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
