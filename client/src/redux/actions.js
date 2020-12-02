import {
    AUTH_LOGIN, AUTH_LOGOUT,
    CLEAR_ERROR,
    FORM_CHANGE,
    REQUEST_ERROR,
    REQUEST_START, REQUEST_SUCCESS, SET_LINK, SET_LINKS
} from './types'


// export function httpRequest() {
//     return
// }

export function authLogin(payload) {
    return {
        type: AUTH_LOGIN,
        payload

    }

}

export function authLogout() {
    return {
        type: AUTH_LOGOUT

    }

}

export function requestStart() {
    return {
        type: REQUEST_START

    }
}

export function requestSuccess() {
    return {
        type: REQUEST_SUCCESS
    }
}

export function requestError(e) {
    return {
        type: REQUEST_ERROR,
        error: e.message
    }
}

export function clearError() {
    return {
        type: CLEAR_ERROR

    }
}


export function formChange(form) {
    return {
        type: FORM_CHANGE,
        payload: form
    }
}

export function setLink(payload) {
    return {
        type: SET_LINK,
        payload
    }
}
export function setLinks(payload) {
    return {
        type: SET_LINKS,
        payload
    }
}


