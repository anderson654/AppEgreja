import axios from "axios";
import { saveOrUpdateKey } from "../../secure/store/asycStorageExpo";

export async function isLogued() {
    const response = await axios.get('/isLogued');
    return response;
}

export async function loginEmail(email, password) {
    const response = await axios.post('/loginEmail', {
        email,
        password,
        "device_name": "anderson"
    });
    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    await saveOrUpdateKey('_token', response.data.token);
    return response;
}

export async function getUser() {
    const response = await axios.get('/me');
    return response;
}


