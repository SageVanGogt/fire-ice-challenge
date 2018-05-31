import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps, mapStateToProps } from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('loadHouses', () => {
    it('should call')
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the correct params', () => {
      let mockDispatch = jest.fn();
      let mappedProps = mapDispatchToProps(mockDispatch);
      let expected = {
        type: 'ADD_HOUSES', 
        houses: [{}, {}]
      };

      mappedProps.setHouses(expected.houses);

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });
  });
});