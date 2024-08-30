import AsyncStorage from '@react-native-async-storage/async-storage';

const saveOrUpdateKey = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
        return true;
    } catch (error) {
        console.error('Erro ao salvar os dados:', error);
        return false;
    }
};


// Função para buscar um valor
const getKey = async (key) => {
    try {
        const stored = await AsyncStorage.getItem(key);
        if (stored !== null) {
            return stored;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
        return null;
    }
};


// Função para remover um valor
const removeKey = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    } catch (error) {
        console.error('Erro ao remover os dados:', error);
        return false;
    }
};

export {
    saveOrUpdateKey,
    getKey,
    removeKey
}