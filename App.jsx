/* eslint-disable @typescript-eslint/no-unused-vars */
// noinspection JSUnresolvedReference

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SQLite from 'react-native-sqlite-storage';

const Test = ({id, nm}) => {
  return <Text>Test</Text>;
};

let db;
const App = () => {
  const [dbi, setdb] = useState();

  useEffect(() => {
    // open database and execute sql
    db = SQLite.openDatabase(
      {
        name: 'test.db', // db 파일은 local.db, 파라미터명은 table 명으로 해야함
        location: 'default', // www
      },
      DB => {
        console.log('불러오기 성공');
        console.log(DB);
        setdb(db);
        DB.transaction(tx => {
          tx.executeSql('SELECT * FROM test;', [], (tx, results) => {
            console.log('execute  success results: ' + JSON.stringify(results));
            console.log('execute success transaction: ' + JSON.stringify(tx));
            const rows = results.rows;
            for (let i = 0; i < rows.length; i++) {
              const test_id = rows.item(i).test_id;
              const test_user_nm = rows.item(i).test_user_nm;
              console.log(test_id, test_user_nm);
            }
          });
        });
      },
      error => {
        console.log('에러발생: ', error);
      },
    );
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View>
          <Test />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
