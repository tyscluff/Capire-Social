import React, { Fragment, useState, useEffect } from 'react';
import { 
  View, 
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import { useMutation } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { setHasUnreadFalse } from '../../redux/slices/myStreamsSlice';
import SendMessageInput from './SendMessageInput';
import MessagesContainer from './MessagesContainer';
import Header from './Header';
import { MARK_READ } from '../../mutations/streamMutations';
import HowToContainer from './HowToContainer';
import { selectStreams } from '../../redux/slices/myStreamsSlice';
 
const FullScreen = ({ route, navigation }) => {

  const dispatch = useDispatch();
  const streams = useSelector(selectStreams)
 
  const { streamName, streamId, owner } = route.params;
  const [loading, setLoading] = useState(true);
  const [markRead] = useMutation(MARK_READ);

  const handleSetLoading = () => {
    setLoading(!loading)
  };

  useEffect(() => {
    return async () => { 
      dispatch(setHasUnreadFalse(streamId));
      await markRead({ variables: { 
        id: streamId
      }})
    }
  });

  const styles = StyleSheet.create({ 
      container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        backgroundColor: "white",
        height: "100%"
      }, 
      footer: {  
        backgroundColor: "white", 
        height: "1%",
        width: "100%",
        marginTop: "1%" 
      }
    });   
  
    return (
      <View style={styles.container}>
          <Header name={`${owner.firstName} ${owner.lastName}`} title={streamName} id={streamId} navigation={navigation} />
          <HowToContainer 
          owner={owner}
          />
          <MessagesContainer 
          streamId={streamId}
          setLoading={handleSetLoading}
          />
          {/* {!loading && */}
            <Fragment>
              <SendMessageInput 
              streamId={streamId} 
              streamOwnerId={owner.id}
              />
              <KeyboardAvoidingView style={styles.footer} {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})} />
            </Fragment>
          {/* } */}
      </View>
    ) 
}

export default FullScreen