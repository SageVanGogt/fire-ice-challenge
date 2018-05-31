import housesReducer from './housesReducer';

describe('housesReducer', () => {
  it('should return a state depending on action type', () => {
    let expected = [{}, {}];
    let mockAction = {
      type: "ADD_HOUSES",
      houses: [{}, {}]
    };
    let initialState = [];
    let actual = housesReducer(initialState, mockAction);
    
    expect(actual).toEqual(expected);
  });
});