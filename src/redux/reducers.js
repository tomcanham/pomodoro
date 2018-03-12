import { combineReducers } from 'redux'
import { timer } from './timer/reducer'
import { todos } from './todos/reducer'

const reducers = combineReducers({
  timer,
  todos
})

export default reducers
