import { View, 
StyleSheet,
ScrollView,
Dimensions} from 'react-native';
import StreamsContainer from './StreamsContainer';
import Header from './Header';
import SearchBar from './SearchBar';

const FullFindScreen = ({ navigation }) => { 

    const tenPercent = Dimensions.get("window").height / 10;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: "100%",
            alignItems: "center",
            backgroundColor: "white",
            minHeight: Dimensions.get("window").height - tenPercent,
        },
        streamsContainer: {
            width: "100%",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        footerPlaceholder: {
            height: "9%",
            width: "100%",
            backgroundColor: "#F5F5F5",
            borderTopColor: "black", 
            borderTopWidth: 1
        }
    })  
 
    return (
        <View style={styles.container}>
            <Header />
            <SearchBar />
            <StreamsContainer navigation={navigation} />
        </View> 
    ) 
}

export default FullFindScreen