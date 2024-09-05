import * as Yup from 'yup';

// Definindo o esquema de validação
const schema = Yup.object().shape({
    code: Yup.string().required('Telefone é obrigatorio.').min(6,'O código deve possuir 6 dígitos.').max(6,'O código deve possuir 6 dígitos.'),
});

// Função de validação
const validateCodeYup = async (data) => {
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

export default validateCodeYup;