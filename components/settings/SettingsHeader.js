import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { standardFont, standardOrange } from '../../constants/styling';

const SettingsHeader = () => {

    const styles = StyleSheet.create({
        container: {
            width: "100%",
            height: "11%",
            backgroundColor: standardOrange,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center"
        },
        text: {
            color: "white",
            marginBottom: "2%",
            fontSize: 24,
            fontFamily: standardFont
        }
    });
 
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Settings
            </Text>
        </View>
    )
};

export default SettingsHeader