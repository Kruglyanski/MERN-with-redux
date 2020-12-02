import React, {useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
export const CreatePage = () => {
    const history = useHistory()
    const auth = useSelector(state => state.auth)
    const {request} = useHttp()
    const [link, setLink] = useState('')

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const pressHandler = async event => {
        if (event.key === 'Enter') {
            try {
                const data = await request('/api/link/generate', 'POST', {from: link}, {
                    Authorization: `Bearer ${auth.token}`
                    })
                history.push(`/detail/${data.link._id}`)
            } catch (e) {
            }
        }
    }
    return (
        <div className="row">
            <div className="col s8 offset-s" style={{paddingTop: '2rem'}}>
                <div className="input-field">
                    <input
                        placeholder="Paste Link"
                        id="link"
                        type="text"
                        value={link}
                        onChange={e => setLink(e.target.value)}
                       // className="yellow-input"
                        onKeyPress={pressHandler}
                    />
                    <label htmlFor="link">Enter link</label>
                </div>
            </div>

        </div>
    )
}