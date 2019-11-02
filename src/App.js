import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Story from './Story'
import {
  fetchStories,
  fetchStoryContent,
} from './actions'
// import Picker from './components/Picker'
// import Posts from './components/Posts'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchStories())
    dispatch(fetchStoryContent('8863'))
    dispatch(fetchStoryContent('21417621'))
  }

  render() {
    const { stories, isFetching, lastUpdated } = this.props

    const storyList = stories.slice(0,10).map((story) => 
      <Story id={story} dispatch={this.props.dispatch}/>
    )
    return (
      <div>
        <p>
          {lastUpdated && (
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
            </span>
          )}
        </p>
        {isFetching && stories.length === 0 && <h2>Loading...</h2>}
        {!isFetching && stories.length === 0 && <h2>Empty.</h2>}
        {stories.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            {storyList}
          </div>
        )}
      </div>
    )
  }
}

App.propTypes = {
  stories: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {

  var stories = []
  const { isFetching, lastUpdated } = state.stories
  if(state.stories) {
    stories = state.stories.items
  } 

  return {
    stories,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)