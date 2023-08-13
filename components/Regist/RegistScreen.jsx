import React, {useEffect} from 'react';
import { SelectList } from 'react-native-dropdown-select-list'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text, TextInput,
  useColorScheme,
  View,
  Alert,
  Button
} from 'react-native';

export default function RegistScreen() {
  const [selected, setSelected] = React.useState("");
  const [txt, setTxt] = React.useState('안녕하세요')

  const level_data = [
    {'key': 1, 'value': 'Level 1'},
    {'key': 2, 'value': 'Level 2'},
    {'key': 3, 'value': 'Level 3'},
    {'key': 4, 'value': 'Level 4'},
  ]
  return (
    <SafeAreaView>
      <Text>과제 이름</Text>
      <TextInput></TextInput>
      <Text>난이도</Text>
      <SelectList
        onSelect={() => alert(selected)}
        setSelected={setSelected}
        data={level_data}
        search={false}
      />
      <Text>메모</Text>
      <TextInput
        multiline
        onChangeText={txt => setTxt(txt)}
      />
      <Button
        title="취소"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Button
        title="저장"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
  </SafeAreaView>
  );
}
