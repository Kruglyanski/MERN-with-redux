import React, {useEffect} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {useDispatch, useSelector} from 'react-redux'
import {
    clearError,
    formChange
} from '../redux/actions'
import {useAuth} from '../hooks/auth.hook'

export const AuthPage = () => {
    const message = useMessage()
    const {request} = useHttp()
    const {login} = useAuth()
    const loading = useSelector(state => state.http.loading)
    const error = useSelector(state => state.http.error)


    const dispatch = useDispatch()

    const form = useSelector(state => state.auth.form)
    useEffect(() => {
        message(error)
        dispatch(clearError())
    }, [error, message, dispatch])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        dispatch(formChange({[event.target.name]: event.target.value}))
    }

    const registerHandler = async () => {

        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch (e) {
        }
    }
    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            login(data)

        } catch (e) {
        }
    }
    return (
        <div className="row">
            <div className="col s6 offset-f3 center">
                <h1>Minimize your link</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Authorization</span>
                        <div>
                            <div className="input-field">
                                <input
                                    placeholder="Enter Email"
                                    id="email"
                                    type="text"
                                    name="email"
                                    className="yellow-input"
                                    value={form.email}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input
                                    placeholder="Enter Password"
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="yellow-input"
                                    value={form.password}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="password">Password</label>
                            </div>


                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="yellow btn darken-4 "
                            style={{"marginRight": 10}}
                            disabled={loading}
                            onClick={loginHandler}
                        >
                            Log in
                        </button>
                        <button
                            className="grey btn lighten-1 black-text m10 "
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Registration
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
