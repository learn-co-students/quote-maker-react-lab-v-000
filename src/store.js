import { createStore } from 'redux'
import rootReducer from './reducers/index'
//Called 'rootReducer' by convention, since all reducers are inside that one file. If you call b/c of convention, it automatically imports any index of whichever folder specified'. If there's an index.js in a folder, and you call that folder, you don't need to specify the index file, it will default to that.
export function configureStore(){
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

export const store = configureStore()