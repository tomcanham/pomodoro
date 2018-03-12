import React from 'react'
import { Provider } from 'react-redux'
import TaskList from './TaskList'
import Timer from './Timer'
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
