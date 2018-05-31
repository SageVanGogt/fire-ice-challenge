const membersReducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_MEMBERS":
      return action.names;
    case "REMOVE_MEMBERS": 
      return [];
    default:
      return state;
  }
}

export default membersReducer;