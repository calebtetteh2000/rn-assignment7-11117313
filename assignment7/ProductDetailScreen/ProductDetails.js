import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "./Header";
import ProductInfo from "./ProductInfo";
import Footer from "./Footer";

function ProductDetails({navigation}){
    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <Header navigation={navigation}/>
                <ProductInfo />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFFFFF'
    },
    scroll:{
        flexGrow: 1
    }
})
export default ProductDetails;
