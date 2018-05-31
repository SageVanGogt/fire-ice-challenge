import React, { Component } from 'react';
import './Card.css';
import * as actions from './../../actions/swornMembers';
import { connect } from 'react-redux';
import * as API from './../../apiCalls/apiCalls';

export class Card extends Component { 
  constructor(props) {
    super(props)
  }

  loadSwornMembers = async (members) => {
    let membersInfo = members.map(async (member) => {
      const memberId = member.split("characters/")[1];
      const response = await API.fetchSwornMember(memberId);
      return response.name;
    }); 
    membersInfo = await Promise.all(membersInfo);
    this.props.setCurrentSwornMembers(membersInfo);
  }

  swornMembersElement = () => {
    return (
      <ul className="sworn-members">
        {this.props.swornMembersList.map(name => <li>{name}</li> )}
      </ul>
    );
  }

  showButton = (props) => {
    const swornMembers = this.props.swornMembers;
    return (
      <button onClick={() => this.loadSwornMembers(swornMembers)}>
        show me swornMembers
      </button>
    );
  }

  hideButton = () => {
    return (
      <button onClick={this.props.removeMembers}>
        hide swornMembers;
      </button>
    );
  }

  render() {
    const { 
      name, 
      founded, 
      seats, 
      titles, 
      coatOfArms, 
      ancestralWeapons, 
      words, 
      swornMembers } = this.props;

    return (
      <div className="card-container">
        <div className="card-info">
          <h1>{name}</h1>
          <h3>founded in: {founded}</h3>
          <h4>seats: {seats}</h4>
          <h5>titles:{titles}</h5>
          <p>{coatOfArms}</p>
          <p>{ancestralWeapons}</p>
          <p>{words}</p>
          {
            this.props.swornMembersList.length > 1 &&
            this.swornMembersElement()
          }
          {
            this.props.swornMembersList.length > 1 ?
              this.hideButton() :
              this.showButton()
          }
        </div>
      </div>
    );
  } 
}

const mapStateToProps = (state) => ({
  swornMembersList: state.swornMembers
})

const mapDispatchToProps = dispatch => ({
  setCurrentSwornMembers: (members) => dispatch(actions.addMembers(members)),
  removeMembers: () => dispatch(actions.removeMembers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);