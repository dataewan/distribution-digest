import React from 'react'

class DistributionControl extends React.Component {
  constructor(props, dist, index){
    super(props)
  }

  updatevalue = (e) => {
    this.props.dist.parameters[0].setter(e.target.value)
  }
  render() {
    return (
      <div>
        <input
          type="range"
          min="0"
          max="100"
          value = {this.props.dist.parameters[0].getter()}
          onChange = {this.updatevalue}/>
        {this.props.dist.name} {this.props.dist.parameters[0].getter()}
      </div>
    )
  }
}

class DistributionControls extends React.Component {
  render() {
    const controls = this.props.distributions.map(
      (d, i) => {
        return(<DistributionControl
          key={i}
          dist={d} />
        )
      }
    )
    return (
      <div>
        {controls}
      </div>
    )
  }
}

export default DistributionControls;
