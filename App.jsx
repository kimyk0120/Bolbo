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
    <View>
      <Button
        title={'READ ALL'}
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
                  const rows = results.rows;

                  for (let i = 0; i < rows.length; i++) {
                    console.log(rows.item(i));
                  }
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
      <Button
        title={'INSERT'}
        onPress={() => {
          console.log('test');
          const insertQuery =
            "INSERT INTO test (value) values ('test@test.com');";
          db.transaction(
            tx => {
              console.log('transaction', tx);
              tx.executeSql(
                insertQuery,
                [],
                (tx, results) => {
                  console.log(
                    'execute success results: ' + JSON.stringify(results), // 실행은 되긴 하나 로우가 3개 있어야 되는데 없음 ..
                  );
                  console.log(
                    'execute success transaction: ' + JSON.stringify(tx),
                  );
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
      {/*<Button title={'UPDATE'} />*/}
      {/*<Button title={'DELETE'} />*/}
    </View>
  );
};

let db;
const App = () => {
  const [dbi, setdb] = useState();

  useEffect(() => {
    // open database and execute sql
    db = SQLite.openDatabase(
      {
        name: 'test2.db', // db 파일은 test.db, 파라미터명은 table 명으로 해야함
        location: 'default', // www
      },
      DB => {
        console.log('불러오기 성공');
        console.log(DB);
        const query = `CREATE TABLE IF NOT EXISTS test(value TEXT NOT NULL);`;
        DB.transaction(
          tx => {
            console.log('transaction', tx);
            tx.executeSql(
              query,
              [],
              (tx, results) => {
                console.log(
                  'execute success results: ' + JSON.stringify(results), // 실행은 되긴 하나 로우가 3개 있어야 되는데 없음 ..
                );
                console.log(
                  'execute success transaction: ' + JSON.stringify(tx),
                );
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
