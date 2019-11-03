import { combineReducers } from 'redux'

import {
  REQUEST_STORIES,
  RECEIVE_STORIES,
  REQUEST_STORY_CONTENT,
  RECEIVE_STORY_CONTENT,
  TOGGLE_VIEW_MODE,
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

function settings(
  state = {
    viewMode: 0
  },
  action
) {
  switch(action.type) {
    case TOGGLE_VIEW_MODE:
      return Object.assign({}, state, {
        viewMode: state.viewMode == 0 ? 1 : 0
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  stories,
  storyContent,
  settings
})

export default rootReducer