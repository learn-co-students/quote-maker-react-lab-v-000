export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      console.log('action:', action);
      return [...state, action.quote];
        
    default:
      return state;
  }
 }
