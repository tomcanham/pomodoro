import * as c from "./constants"

export function addTodo(text) {
  return {
    type: TODO_ADD,
    text
  }
}

export function completeTodo(id) {
  return {
    type: TODO_COMPLETE,
    id
  }
}
