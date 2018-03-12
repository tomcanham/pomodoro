import * as c from "./constants"
import moment from "moment"

function getInitialState() {
  return {
    lastTick: null,
    finish: null,
    rounds: 0
  }
}

const ROUNDS_UNTIL_LONG_BREAK = 3
const ROUND_WORK_INTERVAL = 25
const ROUND_SHORT_BREAK_INTERVAL = 5
const ROUND_LONG_BREAK_INTERVAL = 25
const ROUND_TIME_UNIT = 'seconds'

export function timer(state = getInitialState(), action) {
  switch (action.type) {
    case c.TIMER_START: {
      return Object.assign({}, state, { rounds: ROUNDS_UNTIL_LONG_BREAK, intervalType: c.TIMER_ROUND, finish: moment().add(ROUND_WORK_INTERVAL, ROUND_TIME_UNIT) })
    }

    case c.TIMER_STOP: {
      return Object.assign({}, state, { rounds: 0, finish: null })
    }

    case c.TIMER_TICK: {
      if (state.finish <= moment()) {
        switch (state.intervalType) {
          case c.TIMER_ROUND:
            if (state.rounds > 1) {
              return Object.assign(
                {}, state,
                {
                  rounds: state.rounds - 1,
                  intervalType: c.TIMER_SHORT_BREAK,
                  finish: moment().add(ROUND_SHORT_BREAK_INTERVAL, ROUND_TIME_UNIT)
                })
            } else {
              return Object.assign(
                {}, state,
                {
                  rounds: ROUNDS_UNTIL_LONG_BREAK,
                  intervalType: c.TIMER_LONG_BREAK,
                  finish: moment().add(ROUND_LONG_BREAK_INTERVAL, ROUND_TIME_UNIT)
                })
            }

          case c.TIMER_SHORT_BREAK:
            return Object.assign({}, state,
              {
                rounds: state.rounds,
                intervalType: c.TIMER_ROUND,
                finish: moment().add(ROUND_WORK_INTERVAL, ROUND_TIME_UNIT)
              })

          case c.TIMER_LONG_BREAK:
            return Object.assign({}, state,
              {
                rounds: ROUNDS_UNTIL_LONG_BREAK,
                intervalType: c.TIMER_ROUND,
                finish: moment().add(ROUND_WORK_INTERVAL, ROUND_TIME_UNIT)
              })
        }
      }
    }
  }

  return state
}
