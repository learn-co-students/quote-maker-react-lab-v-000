
export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':

    return state.concat(action.payload.content) 




    default:
    return state;

  }
}
