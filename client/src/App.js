import React from 'react'
import 'materialize-css'
import {useRoutes} from './routes'
import {BrowserRouter as Router} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {Loader} from './components/Loader'
import {useSelector} from 'react-redux'
import {useAuth} from './hooks/auth.hook'

function App() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const routes = useRoutes(isAuthenticated)
    const {ready} = useAuth()
    if (!ready) {
        return <Loader/>
    }
    return (
            <Router>
                {isAuthenticated && <Navbar/>}
                <div className="container">
                    {routes}
                </div>
            </Router>
    )
}

export default App
