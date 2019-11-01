import { combineReducers } from 'redux'

import {
  REQUEST_STORIES,
  RECEIVE_STORIES
} from './actions'

function stories(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_STORIES:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_STORIES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.stories,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  stories
})

export default rootReducer