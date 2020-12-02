import {useCallback, useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {authLogin, authLogout} from '../redux/actions'

const storageName = 'userData'

export const useAuth = () => {

    const dispatch = useDispatch()
    const [ready, setReady] = useState(false)
    const login = useCallback(data => { // без useCallback хуйня в useEffect
        dispatch(authLogin(data))
        localStorage.setItem(storageName, JSON.stringify({
            userId: data.userId, token: data.token
        }))
    }, [dispatch])

    const logout = () => {
        dispatch(authLogout())
        localStorage.removeItem(storageName)

    }

    useEffect(() => {

        const data = JSON.parse(localStorage.getItem(storageName))
        if (data && data.token) {
            login(data)
        }

        setReady(true)
    }, [login])

    return {logout, login, ready}
}