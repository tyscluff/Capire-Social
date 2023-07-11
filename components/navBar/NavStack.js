import React,{ useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Notifications from 'expo-notifications';
import { useMutation } from '@apollo/client';
import NavBar from './NavBar';
import MessagingStack from '../stacks/MessagingStack';
import FindStack from '../stacks/FindStack';
import FullScreen from '../settings/FullScreen';
import { UPDATE_EXPO_TOKEN } from '../../mutations/userMuations';
import { registerForPushNotifications } from '../../functions/notifications/notificationsFunc';

const Tab = createBottomTabNavigator();

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false, 
//     shouldSetBadge: false,
//   }), 
// });

const NavStack = () => {

  return ( 
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <NavBar {...props} />} screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen name="Find" component={FindStack} />
        <Tab.Screen name="Streams" component={MessagingStack} />
        <Tab.Screen name="Settings" component={FullScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  ) 
}

export default NavStack