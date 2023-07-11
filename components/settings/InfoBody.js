import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { standardFont } from '../../constants/styling';

const InfoBody = () => {

    const styles = StyleSheet.create({
        container: {
            justifyContent: "space-around",
            alignItems: "center",
            height: "15%"
        },
        title: {
            fontSize: 24,
            fontFamily: standardFont
        },
        body: {
            fontSize: 18,
            fontFamily: standardFont
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contact us!
            </Text>
            <Text style={styles.body}>
                Message us in the myCapire stream
            </Text>
            <Text style={styles.body}>
                Email: help@mycapire.com
            </Text>
        </View>
    )
}

export default InfoBody