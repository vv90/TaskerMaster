/**
 * Created by Vladimir on 7/30/2016.
 */
import {combineReducers} from 'redux';
import tasks from './taskReducer';

const rootReducer = combineReducers({
	tasks: tasks
});

export default rootReducer;