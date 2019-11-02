import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  fetchStoryContent,
} from './actions'

class Story extends Component {

  componentDidMount() {
    const { dispatch, id } = this.props
    dispatch(fetchStoryContent(id))
  }

  render() {
    const { id, title, by, numComments, url } = this.props
    return (
      <div>
        <h3>{title}</h3>
        <p>poster: {by} id: {id} comments: {numComments} url: {url}</p>
      </div>
    )
  }
}

Story.propTypes = {
  title: PropTypes.string.isRequired,
  numComments: PropTypes.string.isRequired,
  by: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

function mapStateToProps(state,ownProps) {

  var title = ''
  var numComments = ''
  var url = ''
  var by = ''

  if (state.storyContent.items[ownProps.id]) {
    title = state.storyContent.items[ownProps.id].title
    numComments = state.storyContent.items[ownProps.id].descendants
    url = state.storyContent.items[ownProps.id].url
    by = state.storyContent.items[ownProps.id].by
  }
  return {
    title: title,
    numComments: numComments,
    url: url,
    by: by
  }
  
  


}

export default connect(mapStateToProps)(Story)
// export default Story