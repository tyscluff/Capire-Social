import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { standardFont, standardBlue } from '../../constants/styling';

const JoinStreamBtn = ({ price, joined, handlePress }) => {

    const priceString = price !== 0 ? `$${price} a month` : "free!";
    // let joined = false;

    const styles = StyleSheet.create({
        notJoinedContainer: {
            height: "50%",
            width: "80%",
            backgroundColor: standardBlue, 
            marginTop: "5%",
            borderRadius: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // marginBottom: "25%"
        },
        joinedContainer: {
            height: "50%",
            width: "80%",
            backgroundColor: "white",
            borderColor: standardBlue,
            borderWidth: 2,
            marginTop: "5%",
            borderRadius: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // marginBottom: "25%"
        },  
        notJoinedText: {
            color: "white",
            fontSize: 24,
            fontFamily: standardFont
        },
        joinedText: {
            color: standardBlue,
            fontSize: 24,
            fontFamily: standardFont
        }
    });

    return (
        <TouchableOpacity 
        style={joined ? styles.joinedContainer : styles.notJoinedContainer}
        onPress={() => handlePress()}>
            <Text style={joined ? styles.joinedText  : styles.notJoinedText}>
                {joined ? "Leave Stream" : `Join stream!`}
            </Text>
        </TouchableOpacity>
    )
}

export default JoinStreamBtn