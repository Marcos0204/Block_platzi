import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {traerTareas} from '../store/action/tareasAction'

const Tareas = ({traerTareas}) => {

    useEffect(()=> {
        traerTareas()
    }, [traerTareas])


    return (
        <div>
            <h1>tareas saludar marcos</h1>
        </div>
    )
}

const mapSateToProps= ({tareasReducer}) => ({tareasReducer})

const mapDispatchToProps = (dispatch) => {

    return {
        traerTareas: () => dispatch(traerTareas())
    }
}

export default connect(mapSateToProps, mapDispatchToProps)(Tareas)
