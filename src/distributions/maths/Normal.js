import {STEP_SIZE} from './Constants'
import {range} from 'lodash'

class NormalMaths {
  constructor(mean, sd) {
    this.name = "Normal";
    this.mean = mean;
    this.sd = sd;
    this.variance = Math.pow(sd, 2);
    this.parameters = [
      {
        name: "mean",
        getter: this.getMean,
        setter: this.setMean,
        minval: -10,
        maxval: 10,
        step: 0.1
      },
      {
        name: "sd",
        getter: this.getSD,
        setter: this.setSD,
        minval: 0,
        maxval: 10,
        step: 0.1,
      }
    ]
  }

  getMean = () => {
    return this.mean;
  }

  getSD = () => {
    return this.sd;
  }

  setMean = (mean) => {
    this.mean = mean;
  }

  setSD = (sd) => {
    this.sd = sd;
    this.variance = Math.pow(sd, 2)
  }

  getXRange = () => {
    // By default, show a range between plus and minus 3 from the mean
    return [this.mean - 3, this.mean + 3];
  }

  pdf = (x) => {
    const den = Math.sqrt(2 * Math.PI * this.variance);
    const num = Math.exp(-Math.pow(x - this.mean, 2) / 2 * this.variance);
    return num / den
  }

  getXValues = () => {
    const xrange = this.getXRange()
    return range(xrange[0], xrange[1], STEP_SIZE)
  }

  getYValues = (xvalues) => {
    return xvalues.map(this.pdf)
  }
}

export default NormalMaths
