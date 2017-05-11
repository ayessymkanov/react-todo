import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/home'
import 'sanitize.css'
import {store} from './store'

window.store = store

ReactDOM.render(
    <Home />,
    document.getElementById('app')
)
