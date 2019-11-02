import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Sidebar from './Sidebar'
import Story from './Story'
import {
  fetchStories,
  fetchStoryContent,
} from './actions'
import './App.css'

// import Picker from './components/Picker'
// import Posts from './components/Posts'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchStories())
  }

  render() {
    const { stories, isFetching, lastUpdated } = this.props

    const storyList = stories.slice(0,10).map((story) => 
      <Story id={story} dispatch={this.props.dispatch}/>
    )

    const sideBar = <Sidebar/>;

    return (
      <div>
        {sideBar}
        <div class="content-section">
          {isFetching && stories.length === 0 && <h2>Loading...</h2>}
          {!isFetching && stories.length === 0 && <h2>Empty.</h2>}
          {stories.length > 0 && (
            <div class="row" style={{ opacity: isFetching ? 0.5 : 1 }}>
              {storyList}
            </div>
          )}
          <p>
            {lastUpdated && (
              <div class="last-updated-body">
                Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
              </div>
            )}
          </p>
        </div>
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