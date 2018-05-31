import { combineReducers } from 'redux';
import housesReducer from './housesReducer';
import membersReducer from './membersReducer';
import currentHouseReducer from './currentHouseReducer';
const rootReducer = combineReducers({
  houses: housesReducer,
  swornMembers: membersReducer,
  currentHouse: currentHouseReducer
});


export default rootReducer;
