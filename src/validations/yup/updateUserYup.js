import * as Yup from 'yup';
import { isValidCPF } from '../../utils/validateCpf';

// Definindo o esquema de validação
const schema = Yup.object().shape({
    username: Yup.string().matches(/^[a-zA-ZÀ-ÿ]+ [a-zA-ZÀ-ÿ]+$/, 'Por favor, insira seu nome e sobrenome')
        .min(5, 'Nome e sobrenome devem ter no mínimo 5 caracteres')
        .max(50, 'Nome e sobrenome devem ter no máximo 50 caracteres')
        .required('Este campo é obrigatório'),
    email: Yup.string().email('O email é inválido').required('O email é obrigatório'),
    phone: Yup.string().min(11, 'O telefone deve ter 11 caracteres').max(11, 'O telefone deve ter 11 caracteres').required('Telefone é obrigatorio.'),
    cpf: Yup.string().required('O CPF é obrigatório')
        .test('isValidCPF', 'CPF inválido', value => isValidCPF(value))
});

// Função de validação
const updateUserYup = async (data) => {
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

export default updateUserYup;