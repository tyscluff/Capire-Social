import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { standardOrange } from '../../constants/styling';

const SendMessageBtn = ({ active, handleSend }) => {

    const backgroundColor = active ? standardOrange : "#C0C0C0";

    const styles = StyleSheet.create({
        main: {
            flex: 1,
            alignItems: "center", 
            justifyContent: "center",
            backgroundColor: backgroundColor,
            color: "white",
            width: "100%",
            height: 28,
            maxHeight: 28,
            borderRadius: 100,
        },
        inside: {
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    });

    return (
        <TouchableOpacity style={styles.main} disabled={!active} onPress={() => handleSend()}>
            <Text style={styles.inside}>
                <AntDesign name="arrowup" size={24} color="white" />
            </Text>
        </TouchableOpacity>
    )
};

export default SendMessageBtn;