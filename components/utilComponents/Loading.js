import React from 'react';
import { View } from 'react-native';
import { Wave } from 'react-native-animated-spinkit';
import { standardBlue } from '../../constants/styling';

const Loading = () => {
    return (
        <View style={{ marginTop: "100%", alignItems: "center", justifyContent: "center" }}>
            <Wave 
            color={standardBlue}
            size={34}
            />
        </View>
    )
}

export default Loading