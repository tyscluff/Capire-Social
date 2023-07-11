import React from 'react';
import { View, StyleSheet } from 'react-native'; 
import DeleteAccountBtn from './DeleteAccountBtn';
import LogoutBtn from './LogoutBtn';
import InfoBody from './InfoBody';
import SettingsHeader from './SettingsHeader';

const FullScreen = () => {

    const styles = StyleSheet.create({
        container: {
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "white"
        },
        btnsContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "70%",
            height: "8%"
        }
    });

    return (
        <View style={styles.container}>
            <SettingsHeader />
            <View style={{ height: "100%", width: "100%", alignItems: "center", justifyContent: "space-around" }}>
                <InfoBody />
                <View style={styles.btnsContainer}>
                    <LogoutBtn />
                    <DeleteAccountBtn />
                </View>
            </View>
        </View>
    ) 
} 

export default FullScreen