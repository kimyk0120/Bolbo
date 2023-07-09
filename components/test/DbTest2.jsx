import {Button, View} from 'react-native';
import React from 'react';

const DbTest2 = ({db}) => {
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

export default DbTest2;
