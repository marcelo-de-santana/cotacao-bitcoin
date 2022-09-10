import React, {useState, useEffect} from 'react';
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

function url(qtdDays){
  const date = new Date();
  const end_date = Math.floor(Date.now()/1000);
  date.setDate(date.getDate() - qtdDays);
  const start_date = Math.floor(Date.parse(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)/1000);
  return `https://www.mercadobitcoin.net/api/BTC/trades/${start_date}/${end_date}/`
}

async function getPriceCoinsGraphics(url){
  let responseG = await fetch(url);
  let returnApiG = await responseG.json();
  let selectListQuotationsG = returnApiG.bpi;
  const queryCoinsList = Object.keys(selectListQuotationsG).map((key)=>{
    return {
      data: key.split("-").reverse().join("/"),
      valor: selectListQuotationsG[key]
    }
  })
  let dataG = queryCoinsList;
  return dataG;
}

async function getListCoins(url){
  let response = await fetch(url);
  let returnApi = await response.json();
  let selectListQuotations = returnApi.bpi;
  const queryCoinsList = Object.keys(selectListQuotations).map((key)=>{
    return {
      data: key.split("-").reverse().join("/"),
      valor: selectListQuotations[key]
    };
  });
  console.log(queryCoinsList)
  let data = queryCoinsList.reverse();
  return data;
}

export default function App(){
  const [coinsGraphicList, setCoinsGraphicList] = useState([0]);
  const [coinsList, setCoinsList] = useState([]);
  const [days, setDays] = useState(30);
  const [updateData, setUpdateData] = useState(true);

  function updateDay(number){
    setDays(number);
    setUpdateData(true);
  }

  useEffect(() =>{
    getListCoins(url(days)).then((data) =>{
      setCoinsList(data);
    });
    
    getPriceCoinsGraphics(url(days)).then((dataG) =>{
      setCoinsGraphicList(dataG);
    });

    if(updateData){
      setUpdateData(false);
    }
  },[updateData]);

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