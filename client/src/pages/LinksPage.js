import React, {useCallback, useEffect} from 'react'
import {useHttp} from '../hooks/http.hook'
import {Loader} from '../components/Loader'
import {LinksList} from '../components/LinksList'
import {useDispatch, useSelector} from 'react-redux'
import {setLinks} from '../redux/actions'

export const LinksPage = () => {
    const token = useSelector(state => state.auth.token)
    const loading = useSelector(state => state.http.loading)
    const {request} = useHttp()
    const dispatch = useDispatch()

    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request('/api/link', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            dispatch(setLinks(fetched))


        } catch (e) {
        }
    }, [token, request, dispatch])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    if (loading) {
        return <Loader/>
    }
    return (
        <>
            {!loading && <LinksList />}
        </>
    )
}