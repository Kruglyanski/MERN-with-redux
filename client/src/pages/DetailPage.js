import React, {useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {useHttp} from '../hooks/http.hook'
import {Loader} from '../components/Loader'
import {LinkCard} from '../components/LinkCard'
import {setLink} from '../redux/actions'


export const DetailPage = () => {
    const token = useSelector(state => state.auth.token)
    const loading = useSelector(state => state.http.loading)
    const dispatch = useDispatch()
    const {request} = useHttp()
    const link = useSelector(state => state.link.link)
    const linkId = useParams().id // .id берем из роутов, там где :id

    const getLink = useCallback(async () => {
        try {
            const fetched = await request(`/api/link/${linkId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            dispatch(setLink(fetched))
        } catch (e) {}
    }, [token, linkId, request, dispatch])

    useEffect(() => {
        getLink()
    }, [getLink])

    if (loading) {
        return <Loader/>
    }
    return (
        <>
            {!loading && link && <LinkCard/>}
            {/*На link проверяем, чтобы успела отобразиться*/}
        </>
    )
}