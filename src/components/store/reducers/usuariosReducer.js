import * as type from '../types/types'

const InitialState ={
    usuarios:[],
    cargando: false,
    error:false
}

const usuariosReducer = ( state=InitialState, action ) => {
    switch (action.type) {
        case type.TRAER_USUARIOS:
                return {...state, usuarios:action.payload, cargando: false, error: false}
        case type.CARGANDO:
            return {...state, cargando: true}
        case type.ERROR:
            return {...state,cargando:false, error: true}
        default:
            return state;
    }
}

export default usuariosReducer
