import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import { useQuery } from '@apollo/client';
import { GET_STREAM_TEMPLATE_INFO } from '../../queries/streamQueries';
import StreamInfo from '../joinStream/StreamInfo';
import Loading from '../utilComponents/Loading';

const StreamInfoContainer = ({ navigation, route }) => {

    const { id, title } = route.params;
    const { data, loading, error } = useQuery(GET_STREAM_TEMPLATE_INFO, { variables: {
        id
    }});
    const [templateInfo, setTemplateInfo] = useState({});

    useEffect(() => {
        if (data) setTemplateInfo(data.stream.template);

        if (error) console.log(error);
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
            <Header title={title} id={id} navigation={navigation} />
            {loading ?
                <Loading />
                :
                !templateInfo.id ?
                <Loading />
                :
                <StreamInfo 
                id={templateInfo.id}
                name={templateInfo.name}
                price={templateInfo.price}
                description={templateInfo.description}
                bookingUrl={templateInfo.bookingUrl}
                joined={true}
                fromMessages={true}
                navigation={navigation}
                />
            }
        </View>
    )
}

export default StreamInfoContainer