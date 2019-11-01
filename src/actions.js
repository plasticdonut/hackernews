import fetch from 'cross-fetch'

export const REQUEST_STORIES = 'REQUEST_STORIES'
export const RECEIVE_STORIES = 'RECEIVE_STORIES'

function requestStories() {
  return {
    type: REQUEST_STORIES
  }
}

function receiveStories(json) {
  return {
    type: RECEIVE_STORIES,
    stories: json,
    receivedAt: Date.now()
  }
}

export function fetchStories() {
  return dispatch => {
    dispatch(requestStories())
    return fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(response => response.json())
      .then(json => dispatch(receiveStories(json)))
  }
}

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