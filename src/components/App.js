import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Menu from './menu'
import Users from './users'
import Tareas from './tareas'
import Publicaciones from './publicaciones'
import Agregar from './Agregar'
const App = () => {
  return (
    <Router>
      <Menu />
      <div className='margen'>
        <Route exact path='/' component={Users} />
        <Route exact path='/tareas' component={Tareas} />
        <Route exact path='/publicaciones/:id/:name' component={Publicaciones} />
        <Route exact path='/tareas/agregar' component={Agregar} />
      </div> 
    </Router>
  )
}

export default App
