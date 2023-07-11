import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { standardFont } from '../../constants/styling';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ title, id, navigation }) => {

    const styles = StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "11%",
            backgroundColor: "#F5F5F5",
            justifyContent: "space-between",
            alignItems: "flex-end",
        },
        backArrowContainer: {
            height: "100%",
            justifyContent: "flex-end",
            width: "12%" 
        },
        title: {
            fontSize: 24,
            marginBottom: "2%",
            color: "black",
            fontFamily: standardFont 
        }
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity
            style={styles.backArrowContainer}
            onPress={() => navigation.goBack()}>
                <AntDesign name="left" size={24} color="black" 
                style={{ marginBottom: "2%", marginLeft: "2%" }}
                />
            </TouchableOpacity>
            <Text style={styles.title}>
                {title}
            </Text>
            <Ionicons name="ios-information-circle-outline" size={24} color="#F5F5F5" 
            style={{ marginBottom: "2%", marginRight: "2%" }} 
            />
        </View>
    )
}

export default Header