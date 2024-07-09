import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Header(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}></View>
    )
}