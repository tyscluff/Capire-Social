import React from 'react';
import { View } from 'react-native';
import { standardBlue } from '../../constants/styling';

const Header = () => {

    const styles = {
        container: {
            width: "100%",
            height: "11%",
            backgroundColor: standardBlue
        }
    }

    return (
        <View style={styles.container} />
    )
}

export default Header