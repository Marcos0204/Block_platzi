import * as type from '../types/TareasTypes'

const InitialState ={
    tareas:[],
    cargando: false,
    error:false,
    usuario_id : null,
    titulo:''
}

const tareasReducer = ( state=InitialState, action ) => {
    switch (action.type) {
        case type.TRAER_TAREAS:
                return {...state, tareas:action.payload, cargando: false, error: false}
        case type.CARGANDO:
            return {...state, cargando: true}
        case type.ERROR:
            return {...state,cargando:false, error: true}
        case type.CAMBIO_USUARIO_ID:
            return {...state, usuario_id:action.payload}
        case type.CAMBIO_USUARIO_TITULO:
            return {...state, titulo:action.payload}
        default:
            return state;
    }
}

export default tareasReducer
