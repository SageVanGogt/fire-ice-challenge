const currentHouseReducer = (state = '', action) => {
  switch(action.type) {
    case "ADD_CURR_HOUSE":
      return action.house;
    case "REMOVE_CURR_HOUSE":
      return '';
    default: 
      return state;
  }
}

export default currentHouseReducer;