import React from 'react'
import { Link } from 'react-router-dom'

import './Navigation.css'

class Navigation extends React.Component {
  render () {
    return(
      <nav className="Navigation">
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
    </nav>

    )
  }
}

export default Navigation;
