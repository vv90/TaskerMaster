/**
 * Created by Vladimir on 7/30/2016.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import TasksPage from './components/TasksPage';
import ManageTaskPage from './components/ManageTaskPage';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="tasks" component={TasksPage} />
		<Route path="tasks/:id" component={ManageTaskPage} />
	</Route>
);