import axios from 'axios'
import * as types from '../types/types'
export const traerUsuarios = () => async (dispatch) =>{
    dispatch({
        type: types.CARGANDO
    })
    try {
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users')
     
        dispatch({
            type:types.TRAER_USUARIOS,
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