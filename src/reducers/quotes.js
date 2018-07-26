import uuid from 'uuid'
export default (state = [], action) => {
  const uuidId = uuid()

  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(Object.assign({}, action.quote, {id: uuidId}))

    case 'REMOVE_QUOTE':
      let idx = state.indexOf(action.quote)
      return [].concat(state.slice(0, idx), state.slice(idx + 1, state.length))

    default:
      return state
  }
}
