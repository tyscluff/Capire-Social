import { View, Text, StyleSheet } from 'react-native';
import { standardFont, standardOrange } from '../../constants/styling';
    
    const Header = () => {
    
        const styles = StyleSheet.create({
            container: {
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: "11%",
                backgroundColor: standardOrange,
                justifyContent: "center",
                alignItems: "flex-end",
            },
            title: {
                fontSize: 24,
                marginBottom: "2%",
                color: "white",
                fontFamily: standardFont
            }
        });
    
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Find Support
                </Text>
            </View>
        )
    }
    
    export default Header