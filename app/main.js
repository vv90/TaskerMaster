/**
 * Created by Vladimir on 7/29/2016.
 */
import React from 'react';
import {render} from 'react-dom';
import TasksPage from './TasksPage';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();

render(
	(
		<Provider store={store}>
			<TasksPage/>
		</Provider>
	),
	document.getElementById('root'));