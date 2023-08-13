// noinspection DuplicatedCode

import React, {useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import StartScreen from './components/StartScreen';
import MissionList from './components/MissionList/MissionList';
import RegistScreen from './components/Regist/RegistScreen';
import {OpenDB} from './components/db/DB_conn';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    // call open database and create table method
    let db = OpenDB();
  }, []);

  return (
    <NavigationContainer>
      {/*  Stack Navigator 가장 첫 Element 빌드앱의 첫화면에 노출됨 */}
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name="MissionList" component={MissionList} />
        <Stack.Screen name="RegistScreen" component={RegistScreen} />
        <Stack.Screen name="StartScreen" component={StartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
