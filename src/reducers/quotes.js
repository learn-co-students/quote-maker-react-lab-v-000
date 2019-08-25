export default (state = [], action) => {
  switch (action.type){
    case 'ADD_QUOTE':
      console.log(action)
      // state: [...state, store.dispach()]
  }
  return state;
}
