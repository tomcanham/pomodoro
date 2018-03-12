import * as c from "./constants"
import cloneDeep from "lodash.cloneDeep"

function getInitialState() {
  return {
    nextId: 1,
    todos: []
  }
}

export function todos(state = getInitialState(), action) {
  switch(action.type) {
    case c.TODO_ADD: {
      const newTodo = {
        id: state.nextId, isComplete: false, text: action.text
      }

      return Object.assign(
        {}, state,
        { nextId: state.nextId + 1, todos: [...state.todos, newTodo] })
      }

    case c.TODO_COMPLETE: {
      const { id } = action
      const stateClone = cloneDeep(state)
      const todo = stateClone.todos.find((_todo) => _todo.id === id)
      todo.isComplete = !todo.isComplete

      return stateClone
    }
  }
  return state
}
