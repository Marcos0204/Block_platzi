import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Menu from './menu'
import Users from './users'
import Tareas from './tareas'
import Publicaciones from './publicaciones'
const App = () => {
  return (
    <Router>
      <Menu />
      <div className='margen'>
        <Route exact path='/' component={Users} />
        <Route exact path='/tareas' component={Tareas} />
        <Route exact path='/publicaciones/:id/:name' component={Publicaciones} />
      </div> 
    </Router>
  )
}

export default App
