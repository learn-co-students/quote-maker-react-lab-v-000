import uuid from 'uuid'
export default (state = [], action) => {
    switch(action.type){
        case "ADD_QUOTE":

            // console.log(action);
            return state.concat({...action.quote, id: uuid() })
        default:
            return state;
    }
    
}
