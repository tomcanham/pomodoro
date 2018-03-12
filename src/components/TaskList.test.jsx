import React from 'react'
import { AddTodo, Todo, TaskList } from './TaskList'
import renderer from 'react-test-renderer'

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <AddTodo addTodo={(() => 1)} value="foo" setValue={(() => 2)} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // re-rendering
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
