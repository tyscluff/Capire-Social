import React,{ useState } from 'react';
import { 
View, 
StyleSheet, 
Text, 
Button,
TextInput, 
TouchableOpacity,
Alert,
Dimensions,
Platform
} from 'react-native';
import { useDispatch } from "react-redux";
import { standardFont, standardBlue } from '../../constants/styling';
import { setAuthtoken, setUserId } from "../../redux/slices/userSlice";
import { Set_Encrypted_AsyncStorage } from "react-native-encrypted-asyncstorage";
import key from "../../security/key";
import { handleLogin } from '../../functions/login/loginFuncs';

const SignInScreen = ({ hideSignIn }) => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlePress = async () => {
        const res = await handleLogin(email.trim(), password);

        if (res.success) { 
            await Set_Encrypted_AsyncStorage("text", "authToken", res.authToken, key);
            await Set_Encrypted_AsyncStorage("text", "userId", res.user._id, key);
            dispatch(setAuthtoken(res.authToken));
            dispatch(setUserId(res.user._id));
        } else {
            Alert.alert("Error", "Failed to login");
        }
    };

    const styles = StyleSheet.create({
        container: {
            width: "100%", 
            height: "100%",
            minHeight: Dimensions.get("window").height,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "flex-start"
        },
        header: {
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "12%",
            backgroundColor: standardBlue,
            borderBottomColor: "#DCDCDC",
            borderBottomWidth: 1,
            alignItems: "flex-end",
            justifyContent: "space-between",
        },
        cancelBtn: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: standardBlue,
            marginRight: 5,
            marginBottom: "1%"
        },  
        headerText: {
            marginBottom: "1%",
            marginLeft: "30%",
            fontSize: 18,
            color: "white",
            fontFamily: standardFont
        },
        input: {
            width: "80%",
            height: "5%",
            borderColor: "#DCDCDC",
            borderWidth: 2,
            borderRadius: 10,
            fontSize: 18,
            padding: 5,
            marginTop: "5%"
        },
        signInButton: {
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
            height: "5%",
            backgroundColor: standardBlue,
            marginTop: "7%",
            borderRadius: 10
        } 
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Enter your login info
                </Text>
                <TouchableOpacity 
                style={styles.cancelBtn}
                onPress={() => hideSignIn()}>
                    <Text style={{ color: "white", fontSize: 14, fontFamily: standardFont }}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </View>
            <TextInput 
            style={styles.input}
            placeholder="Email" 
            placeholderTextColor="gray"
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
            />
            <TextInput 
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={styles.signInButton} onPress={() => handlePress()}>
                <Text style={{ fontSize: 18, color: "white", fontFamily: standardFont }}>
                    Sign In
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignInScreen