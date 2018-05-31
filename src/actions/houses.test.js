import * as actions from './houses';

describe('house actions', () => {
  describe('addHouses', () => {
    it('should return an object with expected type', () => {
      let expected = {
        type: "ADD_HOUSES",
        houses: [{}, {}]
      };
      let actual = actions.addHouses(expected.houses);
      
      expect(actual).toEqual(expected)
    });
  });
});