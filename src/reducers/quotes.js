import uuid from 'uuid';

const id = uuid();
console.log(id) // '1fd3234'



export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
        return {type: 'ADD_QUOTE', quote: {}}
      break;
    default:

  }
  return state;
}
