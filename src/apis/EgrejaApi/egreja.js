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

export async function sendCodeWhatsApp(phone) {
    const response = await axios.post('/sendCodeWhatsApp', {
        phone
    });
    return response;
}

export async function loginCode(phone, email, type_input, code) {

    const data = {
        ...(phone && { phone }),
        ...(email && { email }),
        type_input,
        code
    }

    const response = await axios.post('/loginCode', data);
    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    await saveOrUpdateKey('_token', response.data.token);
    return response;
}

export async function sendCodeEmail(email) {
    const response = await axios.post('/sendCodeEmail', {
        email
    });
    return response;
}

export async function createUserEmail(email) {
    const response = await axios.post('/createUserEmail', {
        email
    });
    return response;
}

export async function createUserPhone(phone) {
    const response = await axios.post('/createUserPhone', {
        phone
    });
    return response;
}




