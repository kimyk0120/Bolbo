/* eslint-disable */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function MissionList({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.upperImage}>
        <Text>이미지 영역</Text>
      </View>
      <View style={styles.missionCreateBtn}>
        <Text>New 미션 생성 버튼 영역</Text>
      </View>
      <View style={styles.missionListContainer}>
        <Text>미션 리스트</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  upperImage: {
    flex: 1,
    backgroundColor: 'orange',
  },
  missionCreateBtn: {
    flex: 1,
    backgroundColor: 'green',
  },
  missionListContainer: {
    flex: 1,
    backgroundColor: 'blue',
  },
});
