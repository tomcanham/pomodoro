import React from 'react'
import { AddTodo, Todo, TaskList } from './TaskList'
import sinon from "sinon"
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

test('Link changes the class when hovered', () => {
  const fakeTodos = [
    { id: 1, text: "Wax the Buffalo", isComplete: true },
    { id: 2, text: "Fill the Dog up with Gas", isComplete: false }
  ]

  const addTodo = sinon.spy()
  const completeTodo = sinon.spy()

  const wrapper = mount(
    <TaskList
      addTodo={addTodo}
      completeTodo={completeTodo}
      todos={fakeTodos} />
  )

  // should have one task list
  expect(wrapper.find(TaskList).length).toBe(1)

  // ...two tasks...
  expect(wrapper.find(Todo).length).toBe(2)

  // ...and one new task entry box.
  expect(wrapper.find(AddTodo).length).toBe(1)
})
