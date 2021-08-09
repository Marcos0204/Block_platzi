
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {traerTareas} from '../store/action/tareasAction'
import Snnipers from '../users/Snnipers'

const Tareas = ({traerTareas,
                tareas,
                cargando,
                error
                    }) => {
    useEffect(()=> {
        traerTareas()
    }, [traerTareas])
    //const [ usuario, setUsuario] = usuState({})

    const mostarContenido = () =>(
        
            cargando ? <Snnipers />
            :
            Object.keys(tareas).map((usu_id, index) =>(
                <div key={usu_id}>
                    <h2>Usuario {usu_id}</h2>
                    <div className='contenedor_tareas'>
                        {ponerTareas(usu_id)}
                    </div>
                </div>
            ))
    );
    const ponerTareas =(usu_id) =>{
        const porUsuario =  {...tareas[usu_id]}
        return Object.keys(porUsuario).map(tar_id =>(
            <div key={tar_id}>
                <input type='checkbox' defaultChecked={porUsuario[tar_id].completed} />
                {
                    porUsuario[tar_id].title
                }
            </div>
        ))
    
    }

    
    return (
        <div>
            <button
                
            >
                <Link
                    to='/tareas/agregar'
                >
                    Agregar
                </Link>
            </button>
            {mostarContenido()}
        </div>
    )
}





const mapSateToProps= ({tareasReducer}) => ({
    tareas:tareasReducer.tareas,
    cargando: tareasReducer.cargando,
    error:tareasReducer.error
})

const mapDispatchToProps = (dispatch) => {

    return {
        traerTareas: () => dispatch(traerTareas())
    }
}

export default connect(mapSateToProps, mapDispatchToProps)(Tareas)
