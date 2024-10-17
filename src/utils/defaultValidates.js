export function validateName(value) {
    const arrayNames = value.split(" ");
    const arraySemVazios = arrayNames.filter(elemento => elemento !== "");
    return arraySemVazios.length > 1;
}