import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { standardBlue, standardFont } from '../../constants/styling';

const Stream = ({ id, name, navigation, owner, hasUnread }) => {

    const styles = StyleSheet.create({
        container: {
            display: "flex", 
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomColor: "#F5F5F5",
            borderBottomWidth: 1
        },
        streamName: {
            fontSize: 24,
            padding: "3%",
            marginTop: "1%",
            marginBottom: "1%",
            fontFamily: standardFont
        }
    });

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Individual Messages", {
            streamName: name,
            streamId: id,
            owner 
        })}> 
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.streamName}>
                    {owner.firstName + " " + owner.lastName}
                </Text>
                {hasUnread &&
                    <Octicons name="dot-fill" size={24} color={standardBlue} />
                }
            </View>
            <Entypo name="chevron-right" size={24} color="#FF7F50" />
        </TouchableOpacity>
    )
}

export default Stream