import axios from 'axios'
import * as types from '../types/TareasTypes'

export const traerTareas = () => async (dispatch) =>{
    dispatch({
        type: types.CARGANDO
    })
    try {
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/todos')
        const tareas ={}
        respuesta.data.map((object) =>(
            tareas[object.userId]= {
                ...tareas[object.userId],
                [object.id]:{
                    ...object
                }
            }
        ))
        dispatch({
            type:types.TRAER_TAREAS,
            payload:tareas
        })
    } catch (error) {
        console.log()
        dispatch({
            type:  types.ERROR,
            payload:error.message

        })
    }
}

export const cambioUsuarioId =(usuario_id) => (dispatch) =>{
    
    dispatch({
        type: types.CAMBIO_USUARIO_ID,
        payload:usuario_id
    })
}

export const cambioUsuarioTitulo =(title) => (dispatch) =>{
    console.log('dispatch')
    dispatch({
        type: types.CAMBIO_USUARIO_TITULO,
        payload:title
    })
}
