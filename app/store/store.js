import {createStore, compse} from 'redux';
import {syncHistoryWythStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//import the root reducer

import rootReducer from '../reducers/index';

//import some data
import dataDevices from '../data/dataDevices';
//create an object for the default data

const defaultState = {
??
};

const store = createStore(rootReducer, defaultState);
export const histore = syncHistoryWythStore(browserHistory, store);
export default store;