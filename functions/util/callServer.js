import serverUrl from '../../constants/serverUrl';
import { Get_Encrypted_AsyncStorage } from 'react-native-encrypted-asyncstorage';
import key from '../../security/key';

export const get = async (path, headers) => {
    try {
        const authToken = await Get_Encrypted_AsyncStorage("text", "authToken", key);
        const res = await fetch(`${serverUrl}${path}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": authToken,
                ...headers
            }
        }); 

        const data = await res.json();

        if (data.message === 0) {
            return {...data, success: true }
        } else {
            return { success: false }
        }
    } catch (error) {
        return { success: false }
    }
};

export const other = async (method, path, headers, body) => {
    try {
        const authToken = await Get_Encrypted_AsyncStorage("text", "authToken", key);
        const res = await fetch(`${serverUrl}${path}`, {
            method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": authToken,
                ...headers
            },
            body: JSON.stringify({
                ...body
            })
        });

        const data = await res.json();

        if (data.message === 0) {
            return { ...data, success: true }
        } else {
            return { success: false }
        }
    } catch (error) {
        return { success: false }
    }
};