
const housesReducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_HOUSES":
      return action.houses;
    case default:
      return state;
  }
}

export default housesReducer;