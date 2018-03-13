import React from 'react'
import { AddTodo, Todo, TaskList } from './TaskList'
import sinon from "sinon"
import chai from "chai"
import sinonChai from "sinon-chai"
const expect = chai.expect
chai.use(sinonChai)
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
  expect(wrapper.find(TaskList)).to.have.length(1)

  // ...two tasks...
  expect(wrapper.find(Todo)).to.have.length(2)

  // ...and one new task entry box.
  expect(wrapper.find(AddTodo)).to.have.length(1)

  // expect that modifying the input should update the container's state
  wrapper.find('input').simulate('change', {target: {value: 'Foobar'}})
  expect(wrapper.state().newTodo).to.equal('Foobar')

  // expect that submitting the form should trigger the addTodo event
  wrapper.find('form').simulate('submit')
  expect(addTodo).to.have.been.calledWith('Foobar')

  // expect the tasks to be in order
  expect(wrapper.find(Todo).first().text()).to.equal('Wax the Buffalo')

  // and expect that clicking on them triggers the completeTodo event
  // for the correct todo
  wrapper.find(Todo).first().simulate('click')
  expect(completeTodo).to.have.been.calledWith(1)
})
