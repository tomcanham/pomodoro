import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/todos/actions'
import * as constants from '../redux/todos/constants'
import PropTypes from 'prop-types'

const AddTodo = (props) => {
  const { addTodo, value, setValue } = props

  const onSubmit = (e) => { e.preventDefault(); addTodo() }
  return (<form onSubmit={onSubmit}>
    <h3>Add Todo:</h3>
    <input type="text" name="text" value={value} onChange={setValue} />
  </form>)
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired
}

const Todo = (props) => {
  const { todo, completeTodo } = props

  if (todo.isComplete) {
    return <li onClick={() => completeTodo(todo.id)} key={todo.id}><del>{todo.text}</del></li>
  } else {
    return <li onClick={() => completeTodo(todo.id)} key={todo.id}>{todo.text}</li>
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  completeTodo: PropTypes.func.isRequired,
}

class TaskList extends React.Component {
  constructor() {
    super()
    this.state = {
      newTodo: ''
    }
  }

  static propTypes: {
    addTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    todos: PropTypes.any.isRequired
  }

  handleUpdateTodo(event) {
    this.setState({ newTodo: event.target.value })
  }

  handleAddTodo() {
    const { addTodo } = this.props
    const { newTodo } = this.state

    addTodo(newTodo)
    this.setState({ newTodo: '' })
  }

  render() {
    const { todos, completeTodo, addTodo } = this.props
    const { newTodo } = this.state

    return (<div id="taskList">
      <h1>To Do:</h1>
      <ul>
        {todos.map((todo) => <Todo key={todo.id} todo={todo} completeTodo={completeTodo} />)}
      </ul>
      <AddTodo
        value={newTodo}
        addTodo={() => this.handleAddTodo()}
        setValue={(e) => this.handleUpdateTodo(e)} />
    </div>)
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (text) => {
      dispatch(actions.addTodo(text))
    },

    completeTodo: (id) => {
      dispatch(actions.completeTodo(id))
    }
  }
}

const ConnectedTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)
 
export default ConnectedTaskList
