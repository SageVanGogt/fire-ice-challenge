
import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer, mapStateToProps } from './CardContainer';

describe('CardContainer', () => {

  describe('mapStateToProps', () => {
    it('should return the correct props from state', () => {
      let mockState = {
        houses: [{}, {}]
      };
      let mappedProps = mapStateToProps(mockState);
      let expected = [{}, {}];
      let actual = mappedProps.houses;
      
      expect(actual).toEqual(expected);
    })
  })
})