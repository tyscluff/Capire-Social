import { View, Text } from 'react-native';
import { standardFont, standardBlue, standardOrange, standardGray } from '../../constants/styling';

const Message = ({ id, content, fromStreamOwner, isBlast }) => {

    const styles = {
        fromOwnerStyle: {
            width: "100%", 
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start"
        },
        fromParticipantStyle: {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end"
        },
        fromOwnerBubble: {
            borderRadius: 18,
            maxWidth: "65%",
            backgroundColor: standardBlue,
            padding: "2%",
            margin: "2%"
        },
        fromParticipantBubble: {
            borderRadius: 18,
            maxWidth: "65%",
            backgroundColor: standardOrange,
            padding: "2%",
            margin: "2%"
        }, 
        fromOwnerText: {
            fontSize: 18,
            color: "white",
            fontFamily: standardFont
        },
        fromParticipantText: {
            color: "white",
            fontSize: 18,
            fontFamily: standardFont
        },
        isBlastStyle: { 
            width: "100%", 
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start"
        },
        isBlastBubble: {
            borderRadius: 18,
            maxWidth: "65%",
            backgroundColor: standardGray,
            padding: "2%",
            marginLeft: "2%",
            marginTop: "2%",
            marginRight: "2%"
            // margin: "2%"
        },
        isBlastText: {
            fontSize: 18,
            color: "white",
            fontFamily: standardFont
        },
    }; 

    if (isBlast) {
        return (
            <View>
                <View style={styles.isBlastStyle}>
                    <View style={styles.isBlastBubble}>
                        <Text style={styles.isBlastText}>
                            {content}
                        </Text>
                    </View>
                </View>
                <Text style={{ fontFamily: standardFont, fontSize: 10, marginLeft: "3%", marginBottom: "2%" }}>
                    Gray messages are sent to everyone in the stream
                </Text>
            </View>
        )
    } 
 
    return (
        <View style={fromStreamOwner ? styles.fromOwnerStyle : styles.fromParticipantStyle}>
            <View style={fromStreamOwner ? styles.fromOwnerBubble : styles.fromParticipantBubble}>
                <Text style={fromStreamOwner ? styles.fromOwnerText : styles.fromParticipantText}>
                    {content}
                </Text>
            </View>
        </View> 
    )
}

export default Message