import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';
import { handleLogout } from '../../functions/login/loginFuncs';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../../redux/slices/userSlice';
import { selectUserId } from '../../redux/slices/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { standardFont, standardBlue } from '../../constants/styling';

const LogoutBtn = () => {

    const userId = useSelector(selectUserId);
    const dispatch = useDispatch();

    const handlePress = async () => {
        const tokenRemoved = await handleLogout(userId);

        if (tokenRemoved) {
            dispatch(clearUser());
            await AsyncStorage.removeItem("authToken");
            await AsyncStorage.removeItem("userId");
        } else {
            Alert.alert("Error", "Failed to log you out");
        }
    };

    const styles = StyleSheet.create({
        container: {
            backgroundColor: standardBlue,
            width: "40%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            marginBottom: "5%"
        },
        text: { 
            color: "white",
            fontSize: 24,
            fontFamily: standardFont
        }
    });

    return (
        <TouchableOpacity style={styles.container} onPress={() => handlePress()}>
            <Text style={styles.text}>
                Logout
            </Text>
        </TouchableOpacity>
    )
}

export default LogoutBtn