import React from 'react'
import { connect } from 'react-redux'
import { cambioUsuarioId,  
            cambioUsuarioTitulo,
            agregar } from '../store/action/tareasAction'

const Agregar = ({tareasReducer, cambioUsuarioId, cambioUsuarioTitulo, agregar}) => {

    const { usuario_id, titulo } = tareasReducer

    const cambioUsuario =(event) =>{
        cambioUsuarioId(event.target.value)
    }
    const cambiioTitulo = (event) => {
        cambioUsuarioTitulo(event.target.value)
    }
    const guardar=() =>{
        const nueva_tarea= {
            userId:usuario_id,
            title: titulo,
            complete:false
        }
        agregar(nueva_tarea)
    }
    return (
        <div>
            <h1>Agregar</h1>
            Usuario iD:
            <input 
                defaultValue={ usuario_id }
                type='number'
                onChange={cambioUsuario}
            />
            <br /><br/>
            Title :
            <input 
                type='text'
                defaultValue={titulo}
                onChange={cambiioTitulo}
            />
            <br /><br/>
            <button
                onClick={guardar}
            >
                Guardar
            </button>
        </div>
    )
}

const mapStateToPropa = ({tareasReducer}) => ({tareasReducer})

const mapDispatchToProps= (dispatch) =>{
    return {
        cambioUsuarioId: (usuario_id) => dispatch(cambioUsuarioId(usuario_id)),
        cambioUsuarioTitulo:(title) => dispatch(cambioUsuarioTitulo(title)),
        agregar:(nueva_tarea) => dispatch(agregar(nueva_tarea))
    }
}
export default connect(mapStateToPropa, mapDispatchToProps)(Agregar)
