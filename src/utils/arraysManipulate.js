export function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

//pega um item no array remove ele retorna o mesmo e o orray sem o item.
export function getItemToArrayObject(array, key = 'user_id', value) {
    const index = array.findIndex(item => item[key] === value);
    if (index !== -1) {
        const item = array[index];
        array.splice(index, 1);
        return {
            item,
            items: array
        }
    }
    return {
        item: null,
        items: array
    };
}