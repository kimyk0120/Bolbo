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
  Button,
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

const Test = ({db}) => {
  return (
    <Text>
      <Button
        title={'test'}
        onPress={() => {
          console.log(db);
          db.transaction(
            tx => {
              console.log('transaction', tx);
              tx.executeSql(
                'SELECT * FROM test;',
                [],
                (tx, results) => {
                  console.log(
                    'execute success results: ' + JSON.stringify(results), // 실행은 되긴 하나 로우가 3개 있어야 되는데 없음 ..
                  );
                  console.log(
                    'execute success transaction: ' + JSON.stringify(tx),
                  );
                  // const rows = results.rows;
                  //
                  // for (let i = 0; i < rows.length; i++) {
                  //   const test_id = rows.item(i).test_id;
                  //   const test_user_nm = rows.item(i).test_user_nm;
                  //   console.log(test_id, test_user_nm);
                  // }
                },
                error => {
                  console.log('execute error: ' + error.message);
                },
              );
            },
            error => {
              console.log('transaction error: ' + error.message);
            },
          );
        }}
      />
    </Text>
  );
};

let db;
const App = () => {
  const [dbi, setdb] = useState();

  useEffect(() => {
    // open database and execute sql
    db = SQLite.openDatabase(
      {
        name: 'test.db', // db 파일은 test.db, 파라미터명은 table 명으로 해야함
        location: 'default', // www
      },
      DB => {
        console.log('불러오기 성공');
        console.log(DB);
        setdb(DB);
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
          <Test db={dbi} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
