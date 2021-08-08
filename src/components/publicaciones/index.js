import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { traerUsuarios } from '../store/action/usuariosAction'
import fechtPostch from '../store/action/publicacionesAction'
import Snnipers from '../users/Snnipers'
import '../../../src/index.css'



const Publicaciones = ({ match,
                        lista,
                        cargando,
                        traerUsuarios,
                        fechtPostch,
                        post
                            }) => {

    var { id } = match.params
    const  n= parseInt(id)
    

     useEffect(()=>{

            const  callInitial = () =>{
                if (!lista.length) return  traerUsuarios()
                if (!post.length)fechtPostch(n)
            }
            callInitial()
    }, [ traerUsuarios, fechtPostch, lista, n, post ] )
    
    const viewPost = () =>{

        if (cargando) return <Snnipers />
        
        return (
            post.map((item, index) =>(
                <div key={index} className='post'>
                    <h2>{item.title}</h2>
                    <h4>{item.body}</h4>
                </div>
            ))
        )
    }
    
    return (
        <div>
            <h1>publicaciones de {match.params.name} </h1>
            {viewPost()}
        </div>
    )
}




const mapStateToProps = ({ usuariosReducer, publicaciones }) =>{

    return { 
            lista : usuariosReducer.usuarios,
            post: publicaciones.publicaciones,
            cargando: publicaciones.cargando
        }
}

const mapDispatchToProps= (dispatch) =>{
    return  {
      traerUsuarios:() => dispatch(traerUsuarios()),
      fechtPostch: (id)=> dispatch(fechtPostch(id))
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps )(Publicaciones)
