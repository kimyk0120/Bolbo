// 안드로이드 앱 빌드시 에러발생:  [Error: Could not open database]
// 이후 아래 설정 주석 처리시 SQLite 데이터베이스 접근 가능

// module.exports = {
//   dependencies: {
//     'react-native-sqlite-storage': {
//       platforms: {
//         android: {
//           sourceDir:
//             '../node_modules/react-native-sqlite-storage/platforms/android-native',
//           packageImportPath: 'import io.liteglue.SQLitePluginPackage;',
//           packageInstance: 'new SQLitePluginPackage()',
//         },
//       },
//     },
//   },
// };
