import { Fragment } from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import React,{ useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearch, selectStreams, setSearchStreams } from '../../redux/slices/joinStreamSlice';
import Stream from './Stream';
import { GET_TEMPLATES_BY_NAME } from '../../queries/templateQueries';
import { Wave } from 'react-native-animated-spinkit';
import { standardFont, standardBlue } from '../../constants/styling';

const StreamsContainer = ({ navigation }) => {

    const dispatch = useDispatch();
    const search = useSelector(selectSearch);
    const streams = useSelector(selectStreams);
    const [fetchStreams, { loading }] = useLazyQuery(GET_TEMPLATES_BY_NAME, { variables: {
        search
    }}); 

    useEffect(() => {
        const getStreams = async () => {
            const res = await fetchStreams();

            if (res.error) {
                console.log(res.error)
            };
 
            if (res.data) { 
                dispatch(setSearchStreams(res.data.templatesByName));
            }
        };

        getStreams();
    }, [search]);

    const styles = StyleSheet.create({
        container: {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "flex-start",
        },
        stream: {
            width: "31%",
            margin: "1%",
            backgroundColor: "white",
            borderRadius: 20,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            borderColor: "#D0D0D0",
            borderWidth: 1
        }
    }); 

    if (loading) {
        return (
            <View style={{ display: "flex", width: "100%", height: "100%", alignItems: "center" }}>
                <Wave 
                size={34}
                color={standardBlue}
                />
            </View>
        )
    }
 
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {streams.length > 0 ?
                <Fragment> 
                    {streams.map((stream) => 
                        <TouchableOpacity  
                        style={styles.stream} 
                        key={stream.id} 
                        onPress={() => navigation.navigate("Join Stream", {
                            id: stream.id,
                            name: stream.title, 
                            price: stream.price,
                            description: stream.description,
                            ownerId: stream.ownerId,
                            bookingUrl: stream.bookingUrl
                        })}>
                            <Stream id={stream.id} name={stream.title} />
                        </TouchableOpacity>
                    )}
                </Fragment>
                :
                <Fragment>
                    <Text style={{ fontFamily: standardFont }}>
                        No streams match your search
                    </Text>
                </Fragment>
            }
        </ScrollView>
    )
}

export default StreamsContainer