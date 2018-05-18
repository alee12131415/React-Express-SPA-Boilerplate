import {combineReducers} from 'redux'

const title = (state = 'title', action) => {
    if (typeof(state) === 'string') return state
    return 'title'
}

const subtitle = (state = 'subtitle', action) => {
    if (typeof(state) === 'string') return state
    return 'subtitle'
}

export default combineReducers ({
    title,
    subtitle
})
