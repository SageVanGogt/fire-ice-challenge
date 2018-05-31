import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './../Card/Card';
import './CardContainer.css';

export class CardContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const allHouseCards = this.props.houses.map((house, index) => {
      return (
        <Card 
          {...house} 
          key={index}/>
      );
    });
    return (
      <div className="house-cards-container">
        {allHouseCards}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  houses: state.houses
});

export default connect(mapStateToProps)(CardContainer);