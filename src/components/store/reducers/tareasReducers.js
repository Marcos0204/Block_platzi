import * as type from '../types/TareasTypes'

const InitialState ={
    tareas:[],
    cargando: false,
    error:false
}

const tareasReducer = ( state=InitialState, action ) => {
    switch (action.type) {
        case type.TRAER_TAREAS:
                return {...state, tareas:action.payload, cargando: false, error: false}
        case type.CARGANDO:
            return {...state, cargando: true}
        case type.ERROR:
            return {...state,cargando:false, error: true}
        default:
            return state;
    }
}

export default tareasReducer
