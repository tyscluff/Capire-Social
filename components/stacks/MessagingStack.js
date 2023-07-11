import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FullMyStreams from '../viewMyStreams/FullMyStreams.js';
import FullScreen from '../individualMessaging/FullScreen.js';
import StreamInfoContainer from '../streamInfo/StreamInfoContainer.js';

const Stack = createNativeStackNavigator();
 
const MessagingStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Messaging Home"
            component={FullMyStreams}
            options={{
                headerShown: false
            }}
            headerBackVisible={false}
            />
            <Stack.Screen 
            name="Individual Messages"
            component={FullScreen}
            options={{
                headerShown: false
            }}
            headerBackVisible={false}
            />
            <Stack.Screen 
            name="Stream Info"
            component={StreamInfoContainer}
            options={{
                headerShown: false
            }}
            headerBackVisible={false}
            />
        </Stack.Navigator> 
    )
}

export default MessagingStack