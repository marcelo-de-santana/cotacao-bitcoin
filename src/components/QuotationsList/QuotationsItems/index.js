import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./style";

export default function QuotationsItems(){
    return(
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>     
                <View style={styles.boxLogo}>
                    <Image style={styles.logBitcoin} source={require("../../../img/bitcoin.png")}/>
                    <Text style={styles.dayCotation}>07/09/2022</Text>
                </View>
            </View>
            <View style={styles.contextRight}>
                <Text style={styles.price}>$ 20000.00</Text>
            </View>
        </View>
    )
}