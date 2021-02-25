import {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import { requestError, requestStart, requestSuccess} from '../redux/actions'

export const useHttp = () => {

    const dispatch = useDispatch()

    const request = useCallback( async (url, method = 'GET', body = null, headers = {}) => {
        if (body) {
            body = JSON.stringify(body)
            headers['Content-Type'] = 'application/json'
        }
        dispatch(requestStart())

        try {
            const response = await fetch(url, {method, body, headers})
            const data = await response.json()
            console.log(response,'response.ok')
            if (!response.ok) { //????
                throw new Error(data.message || 'Something went wrong!')
            }

            dispatch(requestSuccess())

            return (data)
        } catch (e) {
            dispatch(requestError(e))
        }
    } ,[dispatch])// без useCallback хуйня в DetailPage, request

    return {  request }
}