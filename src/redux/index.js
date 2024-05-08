import {combineReducers} from 'redux';
import counter from './reducer/counter.js';
import list from './reducer/list.js';

export default combineReducers({
    counter,
    list
})