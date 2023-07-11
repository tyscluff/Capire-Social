import { other } from "../util/callServer";

export const handleLogin = async (email, password) => {
    const res = await other("POST", "/auth/login", {}, {
        email,
        password,
        type: "mobile"
    });
 
    return res;
};

export const handleLogout = async (userId) => {
    const res = await other("POST", "/auth/logout", {}, { userId });

    if (res.message === 0) {
        return true;
    } else {
        return false;
    };
};