/**
 * Created by Vladimir on 7/30/2016.
 */
import * as types from '../actions/actionTypes';

export default function taskReducer (state = [], action) {
	switch(action.type) {
		case types.LOAD_TASKS_SUCCESS:
			return action.tasks;
		default:
			return state;
	}
}