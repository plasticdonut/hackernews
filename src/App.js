import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  fetchStories,
} from './actions'
// import Picker from './components/Picker'
// import Posts from './components/Posts'

class App extends Component {
  constructor(props) {
    super(props)
    // this.handleChange = this.handleChange.bind(this)
    // this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchStories())
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
  //     const { dispatch, selectedSubreddit } = this.props
  //     dispatch(fetchPostsIfNeeded(selectedSubreddit))
  //   }
  // }

  // handleChange(nextSubreddit) {
  //   this.props.dispatch(selectSubreddit(nextSubreddit))
  //   this.props.dispatch(fetchPostsIfNeeded(nextSubreddit))
  // }

  // handleRefreshClick(e) {
  //   e.preventDefault()

  //   const { dispatch, selectedSubreddit } = this.props
  //   dispatch(invalidateSubreddit(selectedSubreddit))
  //   dispatch(fetchPostsIfNeeded(selectedSubreddit))
  // }

  render() {
    const { stories, isFetching, lastUpdated } = this.props
    return (
      <div>
        <p>
          {lastUpdated && (
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
            </span>
          )}
          {!isFetching && (
            <button onClick={this.handleRefreshClick}>Refresh</button>
          )}
        </p>
        {isFetching && stories.length === 0 && <h2>Loading...</h2>}
        {!isFetching && stories.length === 0 && <h2>Empty.</h2>}
        {stories.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            {stories}
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
  console.log('state')
  console.log(state)
  var stories = []
  const { isFetching, lastUpdated } = state
  if(state.stories) {
    console.log(state.stories)
    stories = state.stories.items
  } 
  else {
    stories = []
  }

  console.log()

  return {
    stories,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)