import { View, Text, StyleSheet, Platform } from 'react-native';
import serverUrl from '../../constants/serverUrl';
import { standardFont } from '../../constants/styling';
import ExpoFastImage from 'expo-fast-image';
  
const Stream = ({ id, name }) => {

    const styles = StyleSheet.create({
        container: {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            borderRadius: 20
        },
        imageContainer: {
            width: "100%",
            display: "flex",
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
            alignItems: "center",
            justifyContent: "center"
        },
        image: {
            height: 90, 
            width: "100%", 
            borderTopLeftRadius: 20, 
            borderTopRightRadius: 20
        },
        textContainer: {
            padding: "2.5%",
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            width: "100%", 
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20
        }
    });

    return (
        <View style={styles.container}> 
            <View style={styles.imageContainer}>
                <ExpoFastImage 
                uri={`${serverUrl}/images/templateImage/${id}`}
                cacheKey={id}
                style={styles.image} 
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={{ marginLeft: "2%", marginRight: "2%", fontFamily: standardFont }}>
                    {name}
                </Text>
            </View>
        </View>
    )
}

export default Stream