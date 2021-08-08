import { combineReducers } from "redux";
import usuariosReducer from './usuariosReducer'
import publicaciones from './publicacionReducer'
import tareasReducer from './tareasReducers'
const rootReducer = combineReducers({
    usuariosReducer,
    publicaciones,
    tareasReducer
})

export default rootReducer