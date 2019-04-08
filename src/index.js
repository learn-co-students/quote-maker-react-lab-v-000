import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'
import QuoteForm from './containers/QuoteForm'
import Quotes from './containers/Quotes'

let store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <App />
      <QuoteForm />
      <Quotes />
    </React.Fragment>
  </Provider>,
  document.getElementById('root')
)
