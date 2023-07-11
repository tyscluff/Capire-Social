import { View,
StyleSheet,
ScrollView } from 'react-native';
import StreamsContainer from './StreamsContainer';
import Header from './Header';

const FullMyStreams = ({ navigation }) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "flex-end",
            backgroundColor: "white"
        }, 
        scrollContainer: {
            flex: 1,
            width: "100%",
            height: "100%"
        } 
    }); 

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <StreamsContainer navigation={navigation} />
            </ScrollView>
        </View> 
    )
}

export default FullMyStreams