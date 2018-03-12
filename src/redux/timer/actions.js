import * as c from "./constants"

export function timerTick() {
  return {
    type: c.TIMER_TICK
  }
}

export function startTimer() {
  return {
    type: c.TIMER_START
  }
}

export function stopTimer() {
  return {
    type: c.TIMER_STOP
  }
}

export function resetTimer() {
  return {
    type: c.TIMER_RESET
  }
}
