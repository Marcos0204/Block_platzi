import React from 'react'
import { Link } from 'react-router-dom'
const index = () => {
    return (
        <nav className='menu'>
            <Link
                to='/'
            >
                usuarios
            </Link>
            <Link
                to='tareas'
            >
                Tareas
            </Link>
        </nav>
    )
}

export default index
