import React from 'react';

import {SafeAreaView, ScrollView, View, Text} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View>
          <Text>test</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
