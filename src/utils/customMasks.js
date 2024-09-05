const maskPassword = Array(9).fill([/\w/]);

const maskPhone = ['(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

export {
    maskPassword,
    maskPhone
}