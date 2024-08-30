import * as Yup from 'yup';

// Definindo o esquema de validação
const schema = Yup.object().shape({
    email: Yup.string().email('O email é inválido').required('O email é obrigatório'),
    password: Yup.string().required('A senha é obrigatória')
});

// Função de validação
const validateLoginYup = async (data) => {
    try {
        await schema.validate(data, { abortEarly: false });
        return null;
    } catch (error) {
        if (error.inner.length) {

            const allErrors = error.inner.reduce((acc, error) => {
                acc[error.path] = error.message; // A chave é o nome do campo (error.path), e o valor é a mensagem de erro (error.message)
                return acc;
            }, {});

            return allErrors;
        }
    }
};

export default validateLoginYup;