import React from 'react'
import { Link } from 'react-router-dom'


import '../../../src/index.css'


const Tabla = ({ lista, cargando }) => {
  
  
  
  const ponerFilas=() => lista.map((usuario, key) =>(
        <tr key={key}>
          <td>{usuario.name}</td>
          <td>{usuario.email}</td>
          <td>{usuario.website}</td>
          <td>
            <Link
              to={`/publicaciones/${key}/${usuario.name}`}
            >
              <div className="eye-solid3 icon"></div> 
            </Link>
            </td>
        </tr>
  ))

  if (cargando) return null

  return (
    <div >
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
    </div>
  )
}




export default Tabla
