import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './../Card/Card';

export class CardContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="house-cards-container">

      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  houses: state.houses
})

export default connect(mapStateToProps)(CardContainer);