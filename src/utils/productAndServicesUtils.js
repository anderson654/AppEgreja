export function pasTitle(action) {
    switch (action) {
        case 'PUT':
            return 'Atualize os dados do seu serviço ou produto.'
        default:
            return 'Registre um serviço ou produto.'
    }
}

export function pasBtnTitle(action) {
    switch (action) {
        case 'PUT':
            return 'Atualizar'
        default:
            return 'Criar'
    }
}

export function updateItemInArray(item, arrayItens) {
    console.log("@oxixoi",arrayItens);
    
    const index = arrayItens.findIndex(objeto => objeto.id === item.id);
    if (index !== -1) {
        arrayItens[index] = item;
        return arrayItens;
    }
    return arrayItens;
}