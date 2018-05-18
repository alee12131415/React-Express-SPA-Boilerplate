import {createStore} from 'redux'
import reducers from './reducers'
import state from './initialState'
import middleware from './middlewares'

const initialState = sessionStorage.getItem('state') ? JSON.parse(session.sessionStorage.getItem('state')) : state

let store = middleware(createStore)(reducers, initialState)

export default store
