import { combineReducers } from 'redux';
import todos from './todos';
import filter from './filter';
import app from './app';

const reducer = combineReducers({
    todos,
    filter,
    app,
});

export default reducer;