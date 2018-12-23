import React from 'react'

class DistributionName extends React.Component {
  render () {
    return (
      <h3 className="DistributionName">
        {this.props.children}
      </h3>
    )
  }
}

export default DistributionName;
