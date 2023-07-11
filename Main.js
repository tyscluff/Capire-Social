import React,{ useState, useEffect } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink
} from '@apollo/client';
import { Get_Encrypted_AsyncStorage } from 'react-native-encrypted-asyncstorage';
import NavStack from './components/navBar/NavStack';
import LoginHome from './components/login/LoginHome';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthToken, setAuthtoken, setUserId } from './redux/slices/userSlice';
import key from './security/key';
import serverUrl from './constants/serverUrl';
import PrefetchContainer from './components/utilComponents/PrefetchContainer';

const Main = () => {

  const dispatch = useDispatch();

  const uri = serverUrl + "/graphql";

  const authToken = useSelector(selectAuthToken);
 
  useEffect(() => { 
    const getUserInfo = async () => {
      const token = await Get_Encrypted_AsyncStorage("text", "authToken", key);
      const userId = await Get_Encrypted_AsyncStorage("text", "userId", key);
      dispatch(setAuthtoken(token));
      dispatch(setUserId(userId));
    };

    getUserInfo(); 
  }, []); 
  
  const httpLink = new HttpLink({
    uri: uri,
    headers: {
      "Authorization": authToken,
      "type": "mobile"
    }
  });
    
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink, 
  });  

  return (
    <ApolloProvider client={client}>
      {authToken ?
        <PrefetchContainer>
          <NavStack />
        </PrefetchContainer>
        :
        <LoginHome />
      }
    </ApolloProvider>
  )
} 

export default Main