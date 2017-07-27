import {createStore, applyMiddleware} from 'redux'
import {reducer} from '../reducers'
import logger from 'redux-logger'
import throttle from 'lodash/throttle'

const loadState = () => {
    try {
        const savedState = localStorage.getItem('state')
        console.log(savedState)
        if(savedState === null) {
            return undefined
        }
        return JSON.parse(savedState)
    } catch(err) {
        return undefined
    }
}

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch(err) {
        //
    }
}

const persistedState = loadState()

export const store = createStore(reducer, persistedState, applyMiddleware(logger))

store.subscribe(throttle(() => {
    saveState(store.getState())
}, 1000))
