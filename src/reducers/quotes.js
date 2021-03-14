export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      console.log('action:', action);
      // return { quotes: state.quotes.concat(action.payload) };
        
    default:
      return state;
  }
 }
