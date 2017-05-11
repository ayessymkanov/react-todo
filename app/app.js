import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/home'
import 'sanitize.css'
import {store} from './store'
import {Provider} from 'react-redux'

window.store = store

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById('app')
)
