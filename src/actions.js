import fetch from 'cross-fetch'

export const REQUEST_STORIES = 'REQUEST_STORIES'
export const RECEIVE_STORIES = 'RECEIVE_STORIES'
export const REQUEST_STORY_CONTENT = 'REQUEST_STORY_CONTENT'
export const RECEIVE_STORY_CONTENT = 'RECEIVE_STORY_CONTENT'

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

function requestStoryContent() {
  return {
    type: REQUEST_STORY_CONTENT
  }
}

function receiveStoryContent(json) {
  return {
    type: RECEIVE_STORY_CONTENT,
    storyContent: json,
    receivedAt: Date.now()
  }
}

export function fetchStoryContent(id) {
  return dispatch => {
    dispatch(requestStoryContent())
    return fetch('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
      .then(response => response.json())
      .then(json => dispatch(receiveStoryContent(json)))
  }
}