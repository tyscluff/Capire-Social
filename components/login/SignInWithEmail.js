import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { standardFont, standardBlue } from '../../constants/styling';

const SignInWithEmail = ({ showSignIn }) => {

    const styles = StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "row",
            width: "70%",
            height: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: standardBlue,
            borderRadius: 8,
            marginVertical: 10,
            shadowColor: '#171717',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.2,
            shadowRadius: 4,
        },
        text: { 
            fontSize: 18,
            color: "white",
            marginLeft: "5%",
            fontFamily: standardFont
        }
    }); 
 
    return (
        <TouchableOpacity style={styles.container} onPress={showSignIn}>
            <Text style={styles.text}>
                Sign in with email
            </Text>
            <Entypo name="mail" size={24} color="white" style={{ marginRight: "5%" }} />
        </TouchableOpacity>
    )
}

export default SignInWithEmail