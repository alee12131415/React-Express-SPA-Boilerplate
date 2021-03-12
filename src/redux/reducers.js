import {combineReducers} from 'redux'
import actions from './actions' // do not destructure default imports

const {UPDATE_TITLE: updateTitle, UPDATE_SUBTITLE: updateSub} = actions

const title = (state = 'title', action) => {
    switch (action.type) {
        case updateTitle:
            return action.payload
        default:
            return state
    }
}

const subtitle = (state = 'subtitle', action) => {
    switch (action.type) {
        case updateSub:
            return action.payload
        default:
            return state
    }
}

export default combineReducers ({
    title,
    subtitle
})
