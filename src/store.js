import { createStore } from 'redux'
import rootReducer from './reducers/index'

// creates the store as a function for testing purposes

export function configureStore(){
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

export const store = configureStore()
