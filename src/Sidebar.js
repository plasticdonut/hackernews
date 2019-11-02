import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './assets/css/Sidebar.css'

class Sidebar extends Component {

  componentDidMount() {
      
  }

  render() {
    return (
      <div class="sidebar app-padded-4y app-padded-4x">
        {/* User section */}
        <div class="sidebar-user-body">
          <div class="sidebar-user-avatar">
            JN
          </div>
          <div class="sidebar-user-name">
            Justin Nguyen
          </div>
          <div class="sidebar-user-email">
            jn@plasticdonut.com
          </div>
        </div>

        {/* Links */}
        <div class="sidebar-link-body">

        </div>

        {/* Settings */}
        <div class="sidebar-settings-body">
          <ul class="sidebar-settings-ul">
            <li class="sidebar-settings-li">Sign Out</li>
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
  }
}

export default connect(mapStateToProps)(Sidebar)
// export default Sidebar