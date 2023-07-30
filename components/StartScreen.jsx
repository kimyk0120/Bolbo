import * as React from 'react';
import {Button, View} from 'react-native';

// export를 선언하면 파일 외부에서 해당 함수를 사용할 수 있음
export default function StartScreen({navigation}) {
  return (
    <View>
      <Button
        title="시작"
        onPress={
          console.log('test')
          // () => navigation.navigate('Signin')
        }
      />
    </View>
  );
}
