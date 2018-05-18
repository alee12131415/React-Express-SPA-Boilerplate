import React, {Component, Fragment} from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './redux/store'

import Header from './components/Header'

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Header />
            </Router>
        </Provider>
    )
}

render(<App />, document.getElementById('root'))
