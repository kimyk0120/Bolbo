import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function MissionCell() {
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
