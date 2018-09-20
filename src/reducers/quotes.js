

const quotesReducer= (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
     return [...state, action.quote]
    default:
      return state
  }
}

export default quotesReducer;