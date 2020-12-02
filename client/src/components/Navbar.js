import React from 'react'
import {NavLink, useHistory} from 'react-router-dom'

import {useAuth} from '../hooks/auth.hook'


export const Navbar = () => {
    const history = useHistory()
    const{logout} =  useAuth()
    const logoutHandler = event => {
        event.preventDefault()
        logout()
        history.push('/')
    }
    return (
        <nav>
            <div className="nav-wrapper blue darken-1">
                <span href="/" className="brand-logo">Links minimize</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/create">Create</NavLink></li>
                    <li><NavLink to="/links">Links</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Logout</a></li>

                </ul>
            </div>
        </nav>
    )
}