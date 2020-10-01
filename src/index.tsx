import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { people } from './reducers/index'
import { StoreState } from './types/index'
import { Provider } from 'react-redux'

import App from './components/App'

const store = createStore<StoreState>(people, { 
  people: ['Pete', 'Nigel'],
  noOfTeams: 2,
  teamNames: ['Blue', 'Red']
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
)
