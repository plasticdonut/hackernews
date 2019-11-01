import { combineReducers } from 'redux'

import {
  REQUEST_STORIES,
  RECEIVE_STORIES,
  REQUEST_STORY_CONTENT,
  RECEIVE_STORY_CONTENT,
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

function storyContent(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_STORY_CONTENT:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_STORY_CONTENT:
      const new_items = Object.assign({},state.items, {[action.storyContent.id]: action.storyContent})
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: new_items,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  stories,
  storyContent
})

export default rootReducer