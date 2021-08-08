
import React, {  useEffect  } from 'react'
import  Snnipers  from './Snnipers'
import Tabla from './Tabla'
import { connect } from 'react-redux'
import { traerUsuarios } from '../store/action/usuariosAction'
import '../../../src/index.css'


const Users = ({ traerUsuarios, lista, cargando, error}) => {
  
  useEffect(() => {
    
    
    traerUsuarios()
    
    

  }, [ traerUsuarios ])

  const snniper = () =>{
    if (cargando) {
      return <Snnipers />}
    if(error) {
        return <h1>Por favor intente mas tarde, algo salio mal</h1>
      } 
  }
  /*const Tabla =  () =>{
    return (
      <table className='tabla'>
          <thead>
            <tr>
              <th>
                nombre
              </th>
              <th>
                correo
              </th>
              <th>
                enlace
              </th>
            </tr>
          </thead>
          <tbody>
            {ponerFilas()}
          </tbody>
        </table>
    )
  }

  const ponerFilas=() => lista.map((usuario, index) =>(
        <tr key={index}>
          <td>{usuario.name}</td>
          <td>{usuario.email}</td>
          <td>{usuario.website}</td>
        </tr>
  ))
  ***/


  return (
    <div >
      { cargando ? snniper() : <Tabla lista={lista} cargando={cargando} /> }
    </div>
  )
}

const mapStateToProps = (state) =>{
      
      return {
        lista:state.usuariosReducer.usuarios,
        cargando: state.usuariosReducer.cargando,
        error: state.usuariosReducer.error,
      }
};

const mapDispatchToProps= (dispatch) =>{
      return  {
        traerUsuarios:() => dispatch(traerUsuarios())
      }
      
}

export default connect(mapStateToProps,  mapDispatchToProps )(Users)
