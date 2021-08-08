import axios from 'axios'
import * as types from '../types/TareasTypes'

export const traerTareas = () => async (dispatch) =>{
    dispatch({
        type: types.CARGANDO
    })
    try {
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/todos')
     
        dispatch({
            type:types.TRAER_TAREAS,
            payload:respuesta.data
        })
    } catch (error) {
        console.log()
        dispatch({
            type:  types.ERROR,
            payload:error.message

        })
    }
   
}