import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
 
export const registerForPushNotifications = async () => {
    const { status } = await Notifications.requestPermissionsAsync();

    if (status !== "granted") {
        return null;
    };

    if (Platform.OS === "android") { 
        Notifications.setNotificationChannelAsync("default", {
            name: "default",
            importance: Notifications.AndroidImportance.MAX
        });
    };

    const token = (await Notifications.getExpoPushTokenAsync()).data;

    return token;
};