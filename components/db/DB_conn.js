import {mission_ddl, mission_media_ddl, mission_user_ddl} from './Bolbo_ddl';
import SQLite from 'react-native-sqlite-storage';

// DB connection
// open database and execute sql
export function OpenDB() {
  return SQLite.openDatabase(
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
}
