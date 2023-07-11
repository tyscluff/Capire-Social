import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FullFindScreen from '../find/FullFindScreen';
import JoinStreamFullScreen from '../joinStream/JoinStreamFullScreen.js';

const Stack = createNativeStackNavigator();

const FindStack = () => {
    return ( 
        <Stack.Navigator>
            <Stack.Screen 
            name="Find Home"
            component={FullFindScreen}
            options={{
                headerShown: false 
            }}
            headerBackVisible={false}
            /> 
            <Stack.Screen  
            name="Join Stream"
            component={JoinStreamFullScreen}
            options={{
                headerShown: false
            }}
            headerBackVisible={false}
            />
        </Stack.Navigator>
    )
}

export default FindStack