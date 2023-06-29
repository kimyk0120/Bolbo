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
          console.log('DB.transaction', tx); // 여기까지 성공되고 아래 executeSql 실행 되지 않음
          // IOS 되는 것이라 안드로이드에서는 뭔가 문제가 있는 것 같음
          // 1. 테이블을 새로 생성하여 해보기
          // 2. 조회 시점을 달리하여 해보기

          // select all from test table
          tx.executeSql(
            'SELECT * FROM test;',
            [],
            (tx, results) => {
              console.log(
                'execute success results: ' + JSON.stringify(results),
              );
              console.log('execute success transaction: ' + JSON.stringify(tx));
            },
            error => {
              console.log('execute error: ' + error.message);
            },
          );
          // tx.executeSql(
          //   'SELECT * FROM test;',
          //   [],
          //   (tx, results) => {
          //     console.log(
          //       'execute success results: ' + JSON.stringify(results),
          //     );
          //     console.log('execute success transaction: ' + JSON.stringify(tx));
          //     const rows = results.rows;
          //
          //     for (let i = 0; i < rows.length; i++) {
          //       const test_id = rows.item(i).test_id;
          //       const test_user_nm = rows.item(i).test_user_nm;
          //       console.log(test_id, test_user_nm);
          //     }
          //   },
          //   error => {
          //     console.log('execute error: ' + error.message);
          //   },
          // );
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
