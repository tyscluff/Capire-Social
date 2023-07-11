import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { standardBlue, standardOrange, titleFont } from '../../constants/styling';
// import logo from '../../assets/CapiréRectangle.png';

const LogoText = () => {

    const styles = StyleSheet.create({
        container: {
            width: "95%",
            justifyContent: "center",
            alignItems: "center",
            borderRightColor: standardBlue,
            borderRightWidth: 8,
            borderLeftColor: standardBlue,
            borderLeftWidth: 8
        }
    });

    return (
        <View style={styles.container}>
            <Image 
            source={require('../../assets/CapireRectangle.png')}
            style={{
                width: "100%",
            }}
            />
        </View>
    );
};

export default LogoText 