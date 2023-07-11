import { useState, useEffect, useRef } from 'react';
import { FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';
import Message from './Message';
import { clearMessages, selectMessages, setMessages } from '../../redux/slices/messagingSlice';
import { GET_STREAM_MESSAGES } from '../../queries/streamQueries';
import Loading from '../utilComponents/Loading';

const MessagesContainer = ({ streamId, setLoading }) => {

    const dispatch = useDispatch();

    const messages = useSelector(selectMessages);
    const flatlistRef = useRef();

    const { data, error, loading } = useQuery(GET_STREAM_MESSAGES, {
        variables: {
            id: streamId
        },
        pollInterval: 10000
    });

    useEffect(() => {
        const getMessages = async ({ signal } = {}) => { 
            if (data) {
                dispatch(setMessages(data.stream.messages));
                setLoading(false);
            }
 
            return () => {
                dispatch(clearMessages());
            }
        };

        const control = new AbortController();
        getMessages({ signal: control.signal });

        return () => control.abort();
    }, [data, error]);

    if (loading) return <Loading />

    return ( 
        <FlatList 
        data={messages} 
        renderItem={({item}) => {
            return (
                <Message 
                key={item.id}
                id={item.id}
                content={item.content}
                fromStreamOwner={item.fromStreamOwner}
                isBlast={item.isBlast}
                />
            )
        }}
        showsVerticalScrollIndicator={true}
        inverted={-1}
        ref={flatlistRef}
        onLayout={() => flatlistRef.current.scrollToOffset({ animated: true, offset: 0 })}
        />
    ) 
}

export default MessagesContainer 