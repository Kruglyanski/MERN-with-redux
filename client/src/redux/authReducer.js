

import {AUTH_LOGIN, AUTH_LOGOUT, FORM_CHANGE} from './types'

const initialState = {
    token: null,
    userId: null,
    isAuthenticated: false,
    form:{
        email: '', password: ''
    }
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case FORM_CHANGE:
            return {...state, form: {...state.form, ...action.payload}}
        case AUTH_LOGIN:
            return {...state, token: action.payload.token, userId: action.payload.id, isAuthenticated: !!action.payload.token}
        case AUTH_LOGOUT:
            return {...state, token: null, userId: null, isAuthenticated: false}
        default: return state
    }

}