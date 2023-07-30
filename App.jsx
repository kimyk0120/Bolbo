import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import StartScreen from './components/StartScreen';
import MissionList from './components/MissionList/MissionList';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/*  Stack Navigator 가장 첫 Element 빌드앱의 첫화면에 노출됨 */}
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name="MissionList" component={MissionList} />
        <Stack.Screen name="StartScreen" component={StartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
