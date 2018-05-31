export const addCurrentHouse = (house) => {
  return ({
    type: "ADD_CURR_HOUSE",
    house 
  })
}

export const removeCurrentHouse = () => {
  return ({
    type: "REMOVE_CURR_HOUSE"
  })
}