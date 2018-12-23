import React from 'react'

class Plot extends React.Component {
  distributions = () => {
    const distributions = this.props.distributions.map((d, i) => {
      return (<div key={i}>{d.name}</div>)
    })
    return distributions;
  }
  render() {
    return (<div className="Plot">
      {this.distributions()}
    </div>);
  }
}

export default Plot;
