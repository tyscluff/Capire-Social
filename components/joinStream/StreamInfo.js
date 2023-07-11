import React,{ useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useMutation } from '@apollo/client';
import JoinStreamBtn from './JoinStreamBtn';
import serverUrl from '../../constants/serverUrl'
import { JOIN_STREAM, LEAVE_STREAM } from '../../mutations/streamMutations';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId } from '../../redux/slices/userSlice';
import { toggleLoadStreams } from '../../redux/slices/utilSlice';
import { removeStream, insertStream } from '../../redux/slices/myStreamsSlice';
import { standardFont } from '../../constants/styling';
import ExpoFastImage from 'expo-fast-image';
import BookAppointmentBtn from './BookAppointmentBtn';

const StreamInfo = ({ id, name, price, description, joined, fromMessages, navigation, bookingUrl }) => {

    const dispatch = useDispatch();

    const userId = useSelector(selectUserId);
    const [currentJoined, setCurrentJoined] = useState(false);
    const [addStream] = useMutation(JOIN_STREAM);
    const [deleteStream] = useMutation(LEAVE_STREAM);
 
    useEffect(() => {
        setCurrentJoined(joined);
    }, [joined]);

    const handleJoin = async () => {
        const newStream = await addStream({ variables: { 
            templateId: id,
            subscriberId: userId
        }});
 
        if (newStream.data) {
            dispatch(insertStream(newStream.data.addStream));
            setCurrentJoined(true);
        } 
    };

    const handleLeave = async () => {
        const leaveStream = await deleteStream({ variables: {
            templateId: id,
            subscriberId: userId
        }});

        if (leaveStream.data) {
            dispatch(removeStream(leaveStream.data.deleteStream.id));
            setCurrentJoined(false);       
            if (fromMessages) navigation.navigate("Messaging Home")
        }
    };

    const styles = StyleSheet.create({
        container: { 
            height: "81%",
            width: "100%",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
        titleText: {
            marginTop: "2%",
            marginBottom: "5%",
            fontSize: 24,
            fontWeight: "bold",
            fontFamily: standardFont
        },
        image: {
            height: "50%",
            width: "100%",
            marginTop: "2%",
            borderRadius: 20
        },
        buttonContainer: {
            width: "100%",
            height: "20%",
            alignItems: "center",
            justifyContent: "flex-start",
            marginBottom: "25%"
        }
    });

    return (
        <View style={styles.container}>
            <View style={{ width: "95%" }}>
                <ExpoFastImage 
                uri={`${serverUrl}/images/templateImage/${id}`}
                cacheKey={id}
                style={styles.image} 
                />
                <Text style={styles.titleText}>
                    {name}
                </Text>
                <Text style={{ fontFamily: standardFont }}>
                    {description}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <JoinStreamBtn 
                price={price} 
                joined={currentJoined}
                handlePress={currentJoined ? handleLeave : handleJoin}
                /> 
                <BookAppointmentBtn 
                bookingUrl={bookingUrl}
                />
            </View>
        </View>
    )
}

export default StreamInfo