import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

export default function CurrentPrice(){
    return(
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>$ 28000.00</Text>
            <Text style={styles.textPrice}>última cotação</Text>
        </View>
    )
}