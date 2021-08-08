import axios from "axios";
import * as types from '../types/types'



const fechtPostch = (id) => async (dispatch, getState) =>{
    const { usuarios } = getState().usuariosReducer
    const userId = usuarios[id].id
    dispatch({
        type: types.CARGANDO
    })
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
       
        dispatch({
            type: types.TRAER_POST,
            payload:res.data
        })

    } catch (error){
        dispatch({
            type:  types.ERROR,
            payload:error.message

        })
    }
}

export default fechtPostch