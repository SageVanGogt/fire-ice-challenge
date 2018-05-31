export const addMembers = (names) => {
  return ({
    type: "ADD_MEMBERS",
    names
  });
};

export const removeMembers = () => {
  return ({
    type: "REMOVE_MEMBERS"
  })
}