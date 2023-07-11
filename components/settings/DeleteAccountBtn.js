import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { standardFont } from '../../constants/styling';
import { useMutation } from '@apollo/client';
import { DELETE_USER } from '../../mutations/userMuations';
import { handleLogout } from '../../functions/login/loginFuncs';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../../redux/slices/userSlice';
import { selectUserId } from '../../redux/slices/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DeleteAccountBtn = () => {

    const userId = useSelector(selectUserId);
    const dispatch = useDispatch();

    const [callDelete] = useMutation(DELETE_USER);

    const handlePress = async () => {
        const deletedAccount = await callDelete();

        if (deletedAccount.data.deleteUser.id) {
            const tokenRemoved = await handleLogout(userId);

            if (tokenRemoved) {
                dispatch(clearUser());
                await AsyncStorage.removeItem("authToken");
                await AsyncStorage.removeItem("userId");
            } 
        } else {
            Alert.alert("Error", "Failed to delete account");
        }
    };
 
    const styles = StyleSheet.create({
        container: {
            width: "40%",
            height:"100%",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            borderColor: "red",
            borderWidth: 1,
            borderRadius: 20
        },
        text:{
            fontFamily: standardFont,
            color: "red"
        }
    });

    return (
        <TouchableOpacity style={styles.container} onPress={() => handlePress()}>
            <Text style={styles.text}>
                Delete Account
            </Text>
        </TouchableOpacity>
    )
};

export default DeleteAccountBtn