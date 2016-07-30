/**
 * Created by Vladimir on 7/30/2016.
 */

import * as types from './actionTypes';
import api from '../api';

export function loadTasksSuccess(tasks) {
	return { type: types.LOAD_TASKS_SUCCESS, tasks: tasks };
}

export function loadTasks() {
	return function(dispatch) {
		return api.tasks.getAll()
			.then(tasks => {
				dispatch(loadTasksSuccess(tasks));
			})
			.catch(error => {
				throw (error);
			});
	}
}