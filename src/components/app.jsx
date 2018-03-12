import React from 'react'
import { Provider } from 'react-redux'
import TaskList from './task_list'
import Timer from './timer'
import store from '../redux/store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{textAlign: 'center'}}>
          <TaskList />
          <Timer />
        </div>
      </Provider>
    )
  }
}
