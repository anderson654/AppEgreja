

async function saveKeyValue(key, value) {
    await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
        alert("🔐 Here's your value 🔐 \n" + result);
    } else {
        alert('No values stored under that key.');
    }
}

async function deletKey(key) {
    let result = await SecureStore.deleteItemAsync(key);
    return result;
}

export {
    saveKeyValue,
    getValueFor,
    deletKey
}