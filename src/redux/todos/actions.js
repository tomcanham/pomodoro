import * as c from "./constants"

export function addTodo(text) {
  return {
    type: c.TODO_ADD,
    text
  }
}

export function completeTodo(id) {
  return {
    type: c.TODO_COMPLETE,
    id
  }
}
