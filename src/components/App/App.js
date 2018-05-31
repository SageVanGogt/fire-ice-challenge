import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/houses';
import * as API from '../../apiCalls/apiCalls';
import CardContainer from './../CardContainer/CardContainer';
export class App extends Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    this.loadHouses();
  }

  loadHouses = () => {
    const { setHouses } = this.props;
    API.fetchHouses()
      .then(res => setHouses(res))
      .catch(error => error.message);
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
          <CardContainer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

export const mapStateToProps = ({ fake }) => ({ fake });

export const mapDispatchToProps = dispatch => ({ 
  setHouses: (houses) => dispatch(actions.addHouses(houses))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
