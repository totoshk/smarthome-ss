import {createStore, compse} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//import root reducer
import rootReducer from '../reducers/index';

//import default data
import comments from '../data/comments';
import posts from '../data/posts';

//create an object for default data 

const defaultState = {
    posts,
    comments
}

//creating of store

const store = createStore(rootReducer, defaultState); //принимает корневой редюсер и дефолтное состояние
export const history = syncHistoryWithStore(browserHistory, store);

export default store;