import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Stream from './Stream';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../utilComponents/Loading';
import { selectStreams } from '../../redux/slices/myStreamsSlice';

const StreamsContainer = ({ navigation }) => {
    
    const streams = useSelector(selectStreams);
    const [fetchError, setFetchError] = useState(false);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            height: "100%",
            width: "100%",
        }
    });

    return (
        <ScrollView style={styles.container}>
            {streams.map((stream) =>
                <Stream   
                key={stream.id} 
                id={stream.id} 
                name={stream.title}
                owner={stream.owner}
                hasUnread={stream.hasUnread}
                navigation={navigation} 
                />
            )}
        </ScrollView>
    )
}

export default StreamsContainer