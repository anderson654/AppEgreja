import * as Yup from 'yup';

// Definindo o esquema de validação
const schema = Yup.object().shape({
    razao_social: Yup.string().required('O razão social é obrigatório'),
    cnpj: Yup.string().required('O cnpj é obrigatório'),
    cnpj_opening_date: Yup.string().required('A data de criação do CNPJ é obrigatória'),
    email: Yup.string().email('O email é inválido').required('O email é obrigatório'),
    fantasy_name: Yup.string().required('O nome fantasia é obrigatório'),
    main_CNAE: Yup.string().required('O CNAE é obrigatório'),
    municipal_registration: Yup.string().required('O registro municipal é obrigatório'),
    state_registration: Yup.string().required('O estado é obrigatório'),
    title: Yup.string().required('O titulo é obrigatório'),
    website: Yup.string(),
    description: Yup.string(),
    phone: Yup.string().min(11, 'O telefone deve ter 11 caracteres').max(11, 'O telefone deve ter 11 caracteres').required('Telefone é obrigatorio.'),
});

// Função de validação
const validateNewOrganizationYup = async (data) => {
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

export default validateNewOrganizationYup;