import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './../Card/Card';
import './CardContainer.css';
import * as API from './../../apiCalls/apiCalls';

export class CardContainer extends Component {
  constructor(props) {
    super(props)
  }

  loadSwornMembers = (members) => {
    const membersInfo = members.map(async (member) => {
      const memberId = member.split("characters/")[1];
      const response = await API.fetchSwornMember(memberId);
      return response.name;
    }); 
  }

  render() {
    const allHouseCards = this.props.houses.map((house, index) => {
      return (
        <Card 
          loadSwornMembers={this.loadSwornMembers}
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

export const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps)(CardContainer);