import * as Yup from 'yup';

// Definindo o esquema de validação
const schemaEmail = Yup.object().shape({
    email: Yup.string().email('O email é inválido').required('O email é obrigatório')
});

// Função de validação
export const validateLoginYup = async (data) => {
    try {
        await schemaEmail.validate(data);
        return null;
    } catch (error) {
        return [{ field: error.path, message: error.message }]
    }
};
