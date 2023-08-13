// noinspection DuplicatedCode

import React, {useEffect} from 'react';
import SQLite from 'react-native-sqlite-storage';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import StartScreen from './components/StartScreen';
import MissionList from './components/MissionList/MissionList';
import RegistScreen from './components/Regist/RegistScreen';
import {
  mission_ddl,
  mission_media_ddl,
  mission_user_ddl,
} from './components/db/Bolbo_ddl';

const Stack = createStackNavigator();

const App = () => {
  // open database and create table
  useEffect(() => {
    // open database and execute sql
    global.db = SQLite.openDatabase(
      {
        name: 'Bolbo.db',
        location: 'default', // www
        createFromLocation: '~www/Bolbo.db',
      },
      DB => {
        console.log('DB load 성공');

        DB.transaction(
          tx => {
            tx.executeSql(
              [mission_ddl, mission_media_ddl, mission_user_ddl],
              [],
              (tx, results) => {
                console.log(
                  'ddl execute success results: ' + JSON.stringify(results),
                );
              },
              error => {
                console.log('ddl execute error: ' + error.message);
              },
            );
          },
          error => {
            console.log('ddl transaction error: ' + error.message);
          },
        );
      },
      error => {
        console.log('DB load 에러발생: ', error);
      },
    );
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
