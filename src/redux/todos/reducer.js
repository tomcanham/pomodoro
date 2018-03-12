import * as c from "constants"

function getInitialState() {
  return {
    todos: []
  }
}

export function todos(state = getInitialState(), action) {
  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}
