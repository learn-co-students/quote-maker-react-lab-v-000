export default (state = [], action) => {
  let index;
  let quote;

  switch (action.type){
    case 'ADD_QUOTE':
    return state.concat(action.quote)
  }
  return state;
}
