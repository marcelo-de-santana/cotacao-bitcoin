import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import CurrentPrice from './src/components/CurrentPrice';

export default function App(){
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#f50d41" barStyle="light-content" />
      <CurrentPrice/>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0
  }
})