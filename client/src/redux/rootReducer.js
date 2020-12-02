import {combineReducers} from 'redux'
import {authReducer} from './authReducer'
import {httpReducer} from './httpReducer'
import {linkReducer} from './linkReducer'

export const rootReducer = combineReducers({
    http: httpReducer,
    auth: authReducer,
    link: linkReducer
})