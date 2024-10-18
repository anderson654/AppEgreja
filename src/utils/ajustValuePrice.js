export function ajustValueReturn(value) {
    const arrayValues = value.split(' ');
    if (arrayValues.length > 1) {
        let newValue = arrayValues[1];
        newValue = newValue.replace(/\./g, '');
        newValue = newValue.replace(',', '.');
        return newValue;
    }
    return value;
}