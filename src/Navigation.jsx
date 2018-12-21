import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Navigation extends React.Component {
  render () {
    return(
      <ul>
        <li>
          <Link to='/'>Introduction</Link>
        </li>
        <li>
          <Link to="/normal/">Normal distribution</Link>
        </li>
        <li>
          <Link to="/binomial/">Binomial distribution</Link>
        </li>
      </ul>

    )
  }
}

export default Navigation;
