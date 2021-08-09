import React from 'react'
import { connect } from 'react-redux'
import { cambioUsuarioId, cambioUsuarioTitulo } from '../store/action/tareasAction'

const Agregar = ({tareasReducer, cambioUsuarioId, cambioUsuarioTitulo}) => {
    const cambioUsuario =(event) =>{
        console.log(event.target.value)
        cambioUsuarioId(event.target.value)
    }
    const cambiioTitulo = (event) => {
        cambioUsuarioTitulo(event.target.value)
    }
    return (
        <div>
            <h1>Agregar</h1>
            Usuario iD:
            <input 
                defaultValue={ tareasReducer.usuario_id }
                type='number'
                onChange={cambioUsuario}
            />
            <br /><br/>
            Title :
            <input 
                type='text'
                defaultValue={tareasReducer.titulo}
                onChange={cambiioTitulo}
            />
            <br /><br/>
            <button>
                Guardar
            </button>
        </div>
    )
}

const mapStateToPropa = ({tareasReducer}) => ({tareasReducer})

const mapDispatchToProps= (dispatch) =>{
    return {
        cambioUsuarioId: (usuario_id) => dispatch(cambioUsuarioId(usuario_id)),
        cambioUsuarioTitulo:(title) => dispatch(cambioUsuarioTitulo(title))
    }
}
export default connect(mapStateToPropa, mapDispatchToProps)(Agregar)
