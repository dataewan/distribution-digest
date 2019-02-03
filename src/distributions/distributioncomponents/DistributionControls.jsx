import React from 'react'

class ParameterControl extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      value: this.props.parameter.getter()
    }
  }
  
  updatevalue = (e) => {
    this.props.parameter.setter(e.target.value)
    this.setState({
      value: this.props.parameter.getter()
    })
  }
  
  render() {
    return (
      <div>
        <input
          type="range"
          min={this.props.parameter.minval}
          max={this.props.parameter.maxval}
          step={this.props.parameter.step}
          value = {this.state.value}
          onChange = {this.updatevalue}/>
        {this.props.parameter.name} {this.props.parameter.getter()}
      </div>
    )
  }
}

class DistributionControl extends React.Component {
  render() {
    const controls = this.props.dist.parameters.map(
      (parameter, i) => {
        return(
        <ParameterControl
          parameter={parameter}
          key={i} />
        )
      })
    return controls
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
