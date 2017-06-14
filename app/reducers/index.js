import {combineReducers} from 'redux';
import {ruoterReducer} from 'react-router-redux';

import devices from './devices';

const rootReducer = combineReducers({devices, routing: rootReducer});

export default rootReducer;