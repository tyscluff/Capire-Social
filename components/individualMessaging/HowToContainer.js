import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { standardFont } from '../../constants/styling';

const HowToContainer = ({ owner }) => {

    const styles = StyleSheet.create({
        container: {
            // backgroundColor: "#B6A2A2",
            // backgroundColor: "#C99F9F",
            backgroundColor: "#E8E8E8",
            padding: 5,
            width: "100%",
            alignItems: "center",
            // borderBottomColor: "black",
            // borderBottomWidth: 3
        },
        text: {
            fontFamily: standardFont,
            fontSize: 18,
            // color: "white",
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Send your thought in one concise message to make it easy for {owner.firstName} to respond! 
            </Text>
        </View>
    )
}

export default HowToContainer