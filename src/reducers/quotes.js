export default (state = [], action) => {
  let newState;

  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    default: 
    return state;
  }
  
}





// export default function manageUsers(state = {users: [] }, action){
//       console.log(action)

//   switch(action.type) {
//     case 'ADD_USER':
//       const user = {username: action.user.username, hometown: action.user.hometown}
//       return {users: [...state.users, user]}
//     default: 
//       return state
//   }
// }