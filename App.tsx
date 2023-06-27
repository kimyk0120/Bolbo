/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
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

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  // console.log('transaction');
  // dbi.dbi.transaction((tx: any) => {
  //   tx.executeSql('SELECT * FROM test;', [], (tx: any, results: any) => {
  //     const rows = results.rows;
  //     console.log('rows');
  //     for (let i = 0; i < rows.length; i++) {
  //       console.log(rows.item(i));
  //     }
  //   });
  // });

  return (
    <View>
      <Text>{title}</Text>
      <Text>{children}</Text>
    </View>
  );
}

let db: any;
function App(): JSX.Element {
  const [dbi, setdb] = useState();

  useEffect(() => {
    db = SQLite.openDatabase(
      {
        name: 'testlocal.db',
        location: 'default',
        createFromLocation: '~www/testlocal.db',
      },
      () => {
        console.log('불러오기 성공');
        setdb(db);
        db.transaction((tx: any) => {
          tx.executeSql('SELECT * FROM test;', [], (tx: any, results: any) => {
            const rows = results.rows;
            console.log('rows');
            for (let i = 0; i < rows.length; i++) {
              console.log(rows.item(i));
            }
          });
        });
      },
      error => {
        console.log('에러발생: ', error);
      },
    );
  }, []);

  // const db = SQLite.openDatabase(
  //   {
  //     name: 'testlocal.db',
  //     location: 'default',
  //     createFromLocation: '~www/testlocal.db',
  //   },
  //   () => {
  //     console.log('&& sqlite success');
  //   },
  //   error => {
  //     console.log('&& sqlite error');
  //     console.log(error);
  //   },
  // );
  //
  // db.transaction(tx => {
  //   tx.executeSql('SELECT * FROM test;', [], (tx, results) => {
  //     const rows = results.rows;
  //     console.log('rows');
  //     for (let i = 0; i < rows.length; i++) {
  //       console.log(rows.item(i));
  //     }
  //   });
  // });

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View>
          <Section title="Step One" />
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
