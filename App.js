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
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationsList from './src/components/QuotationsList';
import QuotationsItems from './src/components/QuotationsList/QuotationsItems';

export default function App(){
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#f50d41" barStyle="light-content" hidden/>
      <CurrentPrice/>
      <HistoryGraphic/>
      <QuotationsList/>
      <QuotationsItems/>
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