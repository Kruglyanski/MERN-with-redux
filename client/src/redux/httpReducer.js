import {CLEAR_ERROR, REQUEST_ERROR, REQUEST_START, REQUEST_SUCCESS} from './types'

const initialState = {
    loading: false,
    error: null


}

export const httpReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_START:
            return {...state, loading: true}
        case REQUEST_SUCCESS:
            return {...state, loading: false}
        case REQUEST_ERROR:
            return {...state, error: action.error, loading: false}
        case CLEAR_ERROR:
            return {...state, error: null}

        default:
            return state
    }
}