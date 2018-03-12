import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/timer/actions'
import * as constants from '../redux/timer/constants'
import PropTypes from 'prop-types'
import moment from 'moment'

class Timer extends React.Component {
  constructor() {
    super()

    this.state = {
      timerID: null
    }
  }

  static propTypes: {
    timerTick: PropTypes.func.isRequired,
    startTimer: PropTypes.func.isRequired,
    stopTimer: PropTypes.func.isRequired,
    finish: PropTypes.object.isRequired,
    intervalType: PropTypes.string.isRequired,
    rounds: PropTypes.number.isRequired
  }

  tick() {
    const { finish, timerTick } = this.props
    if (finish) {
      timerTick()
      this.forceUpdate()
    }
  }

  componentWillMount() {
    const { timerTick } = this.props
    const timerID = setInterval(() => this.tick(), 1000)

    this.setState({ timerID })
  }

  onTimerClick() {
    const { startTimer, stopTimer, finish } = this.props

    if (finish) {
      stopTimer()
    } else {
      startTimer()
    }
  }

  render() {
    const { finish, intervalType, rounds } = this.props

    if (finish) {
      const duration = finish.diff(moment(), 'minutes')
      const description = intervalType === constants.TIMER_ROUND ? "break" : "break ends"
      return (<div>
        <h1>{duration} minutes remaining until {description} ({rounds} round(s) remaining until long break)</h1>
        <button onClick={() => this.onTimerClick()} type="button">Stop Timer</button>
      </div>)
    } else {
      return (<div>
        <button onClick={() => this.onTimerClick()} type="button">Start Timer</button>
      </div>)
    }
  }
}


const mapStateToProps = state => {
  return {
    finish: state.timer.finish,
    intervalType: state.timer.intervalType,
    rounds: state.timer.rounds
  }
}

const mapDispatchToProps = dispatch => {
  return {
    timerTick: () => {
      dispatch(actions.timerTick())
    },

    startTimer: () => {
      dispatch(actions.startTimer())
    },

    stopTimer: () => {
      dispatch(actions.stopTimer())
    }
  }
}

const ConnectedTimer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer)
 
export default ConnectedTimer
