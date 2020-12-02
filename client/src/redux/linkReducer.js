import {SET_LINK, SET_LINKS} from './types'

const initialState = {
    link: null,
    links: []
}

export const linkReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LINK:
            return {...state, link: action.payload}
        case SET_LINKS:
            return {...state, links: action.payload}

        default:
            return state
    }

}