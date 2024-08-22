//o  valor original sempre deve ser mantido em um lugar
const filterMaskText = (oldText, currentText, inputIsVisible) => {
    let newText = currentText;
    //criar um filtro para pegar o ultimo caracter caso esteja ofuscado
    if (!inputIsVisible && (currentText.length > oldText.length)) {
        newText = oldText + newText.slice(-1);
    } else if (!inputIsVisible && (currentText.length < oldText.length)) {
        newText = oldText.slice(0, -1);
    }
    return newText;
}

export {
    filterMaskText
}