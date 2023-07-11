import { useState } from 'react';
import { View, StyleSheet, Text, Modal } from 'react-native';
import SignInScreen from './SignInScreen';
import SignInWithEmail from './SignInWithEmail';
import LogoText from './LogoText';
import { standardFont, standardBlue } from '../../constants/styling';
import * as WebBrowser from 'expo-web-browser';

const LoginHome = () => {

    const [showSignInVisible, setShowSignInVisible] = useState(false);

    const showSignIn = () => {
        setShowSignInVisible(true);
    };

    const hideSignIn = () => {
        setShowSignInVisible(false);
    };

    const handleOpenWebBrowser = async () => {
        await WebBrowser.openBrowserAsync("https://mycapire.com/createAccount");
    };

    const styles = StyleSheet.create({
        container: {
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "white"
        },
        welcomeText: {
            fontSize: 50,
            color: standardBlue,
            fontFamily: standardFont
        },
        buttonsContainer: {
            width: "100%",
            height: "7%",
            alignItems: "center",
            justifyContent: "center"
        },
        createText: {
            fontSize: 18,
            textDecorationLine: "underline",
            marginTop: "5%",
            fontFamily: standardFont
        }
    });

    return (
        <View style={styles.container}>
            <Modal 
                animationType='slide'
                transparent={false}
                visible={showSignInVisible}
                onRequestClose={() => setShowSignInVisible(false)}
            >
                <SignInScreen hideSignIn={hideSignIn} />
            </Modal>
            <LogoText />
            <View style={styles.buttonsContainer}>
                <SignInWithEmail showSignIn={showSignIn} />
                <Text 
                style={styles.createText}
                onPress={handleOpenWebBrowser}>
                    Create Account!
                </Text>
            </View> 
        </View>
    )
};

export default LoginHome;