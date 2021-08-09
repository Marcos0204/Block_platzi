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