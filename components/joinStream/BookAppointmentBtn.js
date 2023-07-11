import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { standardFont, standardGray } from '../../constants/styling';
import * as WebBrowser from 'expo-web-browser';

const BookAppointmentBtn = ({ bookingUrl }) => {

    const handleOpenWebBrowser = async () => {
        if (bookingUrl) {
            await WebBrowser.openBrowserAsync(bookingUrl);
        } else {
            Alert.alert(`This coach doesn't allow appointments yet. Join their stream and message them!`)
        }
    };

    const styles = StyleSheet.create({
        container: {
            height: "50%",
            width: "80%",
            backgroundColor: standardGray,
            borderColor: standardGray,
            borderWidth: 2,
            marginTop: "5%",
            borderRadius: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },  
        text: {
            color: "white",
            fontSize: 24,
            fontFamily: standardFont
        }
    });

    return (
        <TouchableOpacity style={styles.container} onPress={() => handleOpenWebBrowser()}>
            <Text style={styles.text}>
                Book an appointment
            </Text>
        </TouchableOpacity>
    )
} 

export default BookAppointmentBtn