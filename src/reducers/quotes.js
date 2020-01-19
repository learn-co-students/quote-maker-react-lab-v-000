
export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
    //console.log(state.concat(action.quote))
    return state.concat(action.quote)

    default:
    return state;

  }
}
