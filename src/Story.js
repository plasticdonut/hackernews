import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchStoryContent } from './actions'
import './App.css'
import './assets/css/Card.css'

class Story extends Component {

  componentDidMount() {
    const { dispatch, id } = this.props
    dispatch(fetchStoryContent(id))
  }

  render() {
    const { id, title, by, numComments, url } = this.props
    return (
      <div class="app-card app-shadowed app-padded-2y app-padded-2x col-3">
        <div class="by-line">
          <div class="poster-avatar">{by.charAt(0)}</div>
          <div class="poster-name">{by}</div>
        </div>
        <a class="card-link" href={url} target="_blank"><h3>{title}</h3></a>
        <div class="image-placeholder">IMG_PLACEHOLDER</div>
        <div class="url-body">
          <a class="url-text" target="_blank" href={url}>{url}</a>
        </div>
        <div class="comment-body">
          <div class="comment-text">Comments: {numComments}</div>
        </div>
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