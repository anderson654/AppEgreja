import * as Yup from 'yup';

// Definindo o esquema de validação
const schema = Yup.object().shape({
    title: Yup.string().required(),
    description: Yup.string().required(),
    price: Yup.string().required(),
    discount: Yup.string(),
    type_id: Yup.string().required(),
    organization_id: Yup.string().required(),
});

// Função de validação
const productsAndServicesYup = async (data) => {
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

export default productsAndServicesYup;