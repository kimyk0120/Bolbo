import React from 'react';

import {SafeAreaView, ScrollView, View} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View>{/*<DbTest2 db={dbi} />*/}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
