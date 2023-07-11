import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { standardFont, standardOrange } from '../../constants/styling';

const Header = ({ navigation, name }) => {

    const styles = StyleSheet.create({
        container: {
            width: "100%",
            height: "11%",
            backgroundColor: standardOrange,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between"
        },
        backArrowContainer: {
            height: "100%",
            justifyContent: "flex-end",
            width: "12%"
        },   
        text: {
            color: "white",
            marginBottom: "2%",
            fontSize: 24,
            fontFamily: standardFont
        }
    })
 
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            style={styles.backArrowContainer}
            onPress={() => navigation.goBack()}>
                <AntDesign name="left" size={24} color="white" 
                style={{ marginBottom: "10%", marginLeft: "5%" }}
                />
            </TouchableOpacity>
            <Text style={styles.text}>
                {name}
            </Text>
            <AntDesign name="left" size={24} color={standardOrange} style={{ marginBottom: "2%" }} />
        </View>
    )
}

export default Header