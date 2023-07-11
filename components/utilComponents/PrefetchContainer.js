import React, { useEffect } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { GET_MY_STREAMS } from '../../queries/userQueries';
import { GET_TEMPLATES_BY_NAME } from '../../queries/templateQueries';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId } from '../../redux/slices/userSlice';
import { selectToggleStreams, setStreams } from '../../redux/slices/myStreamsSlice';
import { setSearchStreams } from '../../redux/slices/joinStreamSlice';
import { UPDATE_EXPO_TOKEN } from '../../mutations/userMuations';
import { registerForPushNotifications } from '../../functions/notifications/notificationsFunc';
import * as Notifications from 'expo-notifications';
import Loading from './Loading';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false, 
      shouldSetBadge: false,
    }), 
  });

const PrefetchContainer = ({ children }) => {

    const dispatch = useDispatch();
    const userId = useSelector(selectUserId);
    const [handleUpdateExpoToken] = useMutation(UPDATE_EXPO_TOKEN);
    const [fetchStreams, { loading, error }] = useLazyQuery(GET_MY_STREAMS, 
        { 
            variables: {
                id: userId 
            }, 
            fetchPolicy: "no-cache"
        } 
    ); 
    const [fetchSearchStreams] = useLazyQuery(GET_TEMPLATES_BY_NAME, { variables: {
      search: ""
  }}); 

    useEffect(() => {
      const getStreams = async () => {
          const res = await fetchSearchStreams();

          if (res.error) {
              console.log(res.error)
          };

          if (res.data) { 
              dispatch(setSearchStreams(res.data.templatesByName));
          }
      };

      getStreams();
  }, []);

    useEffect(() => {
        const getStreams = async () => {
            const res = await fetchStreams();

            if (res.data) dispatch(setStreams(res.data.user.subscribedStreams));

            if (res.error) {
                console.log("there was an error");
            }   
        };

        getStreams();
    }, [error]);

    useEffect(() => { 
      const getAndSetExpoToken = async () => {
        const token = await registerForPushNotifications();
  
        if (token) {
          await handleUpdateExpoToken({ variables: {
            expoToken: token
          }});
        };
      };
  
      getAndSetExpoToken();
    }, []); 

    if (loading) return <Loading />

    return children;
};

export default PrefetchContainer; 