/**
 * Created by Vladimir on 7/30/2016.
 */
import {combineReducers} from 'redux';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
	tasks: taskReducer
});

export default rootReducer;