
const initialState = {
    usuarios: {
        active: null,
        list: [
            'Hugo',
            'Maria',
            'Karla',
            'George',
            'Pedro'
        ]
    }
}

const usuariosReducer = (state = initialState.usuarios, action) => {
    if (action.type === 'CHANGE_USER') {
        return {
            ...state,
            active: action.payload
        }
    }

    return state
}

export default usuariosReducer