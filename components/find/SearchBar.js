import { View, StyleSheet, TextInput } from 'react-native'; 
import { useDispatch } from 'react-redux';
import { setSearch } from '../../redux/slices/joinStreamSlice';

const SearchBar = () => {

    const dispatch = useDispatch();

    const handleChange = (newSearch) => {
        dispatch(setSearch(newSearch));
    };
 
    const styles = StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "5%",
            marginTop: "5%",
            marginBottom: "5%",
            backgroundColor: "white"
        },
        input: {
            borderColor: "#D3D3D3",
            borderWidth: 1,
            borderRadius: 20,
            width: "80%",
            height: "100%",
            paddingLeft: "4%"
        }
    });

    return (
        <View style={styles.container}>
            <TextInput 
            style={styles.input} 
            placeholder="Search" 
            onChangeText={(text) => handleChange(text)}
            />
        </View>
    )
}

export default SearchBar