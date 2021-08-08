import * as types from '../types/types'

const InitialState ={
    publicaciones:[],
    cargando: false,
    error:false
}

const publicaciones = ( state=InitialState, action ) => {
    switch (action.type) {
        case types.TRAER_POST:
                return {...state,
                    publicaciones:action.payload, 
                    cargando: false,
                    error: false}
                    
        case types.CARGANDO:
            return {...state, cargando: true}
        case types.ERROR:
            return {...state,cargando:false, error: true}
        default:
            return state;
    }
}


export default publicaciones
