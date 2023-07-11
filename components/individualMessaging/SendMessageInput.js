import { TextInput, StyleSheet, KeyboardAvoidingView, View, Alert, Keyboard } from "react-native";
import { useEffect, useState } from 'react';
import { useMutation } from "@apollo/client";
import SendMessageBtn from "./SendMessageBtn";
import { ADD_MESSAGE } from "../../mutations/messageMutations";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../redux/slices/messagingSlice";
import { selectUserId } from "../../redux/slices/userSlice";

const SendMessageInput = ({ streamId, streamOwnerId }) => {

    const dispatch = useDispatch();

    const userId = useSelector(selectUserId);
    const [message, setMessage] = useState("");
    const [btnActive, setBtnActive] = useState(false);
    const [height, setHeight] = useState("4%");
    const [sendMessage] = useMutation(ADD_MESSAGE);

    const handleMessageChange = () => {
        if (message === "" || message === " ") {
            setBtnActive(false);
        } else {
            setBtnActive(true);
        };
    };

    const handleSend = async () => {
        if (btnActive) {
            try {
                const mutationRes = await sendMessage({ variables: {
                    streamId: streamId,
                    streamOwnerId: streamOwnerId,
                    streamSubscriberId: userId,
                    fromStreamOwner: false,
                    content: message,
                    isFile: false,
                }});
        
                if (mutationRes.data) {
                    dispatch(addMessage(mutationRes.data.addMessage));
                    setMessage("");
                } else {
                    Alert.alert("Error", "Message failed to send");
                }
            } catch (error) {
                console.log(error);
                Alert.alert("Error", "Message failed to send");
            }
        }
    };

    useEffect(() => {
        handleMessageChange();
    }, [message]);

    const styles = StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "85%",
            height: height,
            minHeight: "4%",
            maxHeight: "12%",
            borderColor: "#DCDCDC",
            borderWidth: 1,
            borderRadius: 20,
            paddingRight: "3%",
        },
        writeMessageInput: {
            paddingLeft: 15,
            paddingRight: 10,
            width: "95%",
            height: "100%",
            borderWidth: 0,
            fontSize: 18, 
        },
        btnContainer: {
            width: "8%",
            height: "100%",
            borderRadius: 50,
            justifyContent: "flex-end",
            marginBottom: "1%",
            marginTop: ".05%"
        } 
    });

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TextInput 
            style={styles.writeMessageInput} multiline={true} placeholder='myCapire message' 
            onChangeText={input => setMessage(input)} 
            onContentSizeChange={e => setHeight(e.nativeEvent.contentSize.height + 10)}
            // onFocus={() => goToBottom()}
            value={message}
            />
            <View style={styles.btnContainer}>
                <SendMessageBtn 
                active={btnActive} 
                handleSend={handleSend} 
                />
            </View>
        </KeyboardAvoidingView>
    )
};

export default SendMessageInput