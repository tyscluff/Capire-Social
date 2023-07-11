import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import Header from './Header';
import StreamInfo from './StreamInfo';
import { USER_IN_STREAM } from '../../queries/templateQueries';
import { useSelector } from 'react-redux';
import { selectUserId } from '../../redux/slices/userSlice';

const JoinStreamFullScreen = ({ navigation, route }) => {

    const userId = useSelector(selectUserId);
    const { id, name, price, description, ownerId, bookingUrl } = route.params;
    const [joined, setJoined] = useState(false);
    const { data, error, loading } = useQuery(USER_IN_STREAM, 
        {  
            variables: { 
                templateId: id,
                userId: userId
            },
            fetchPolicy: "network-only"
        }
    );

    useEffect(() => {
        const getUserInStream = () => {
            if (error) {
                console.log(error);
            }
 
            if (data) {
                setJoined(data.checkIfUserIsInStream);
            }
        };

        getUserInStream();
    }, [data, error]);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: "100%",  
            height: "100%",
            backgroundColor: "white"
        }
    });

    return (
        <View style={styles.container}>
            <Header navigation={navigation} name={name} />
            <StreamInfo 
            id={id}
            name={name}
            price={price}
            description={description}
            joined={joined}
            ownerId={ownerId}
            bookingUrl={bookingUrl}
            fromMessages={false}
            navigation={navigation}
            />
        </View>
    )
}

export default JoinStreamFullScreen