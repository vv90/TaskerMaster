/**
 * Created by Vladimir on 7/29/2016.
 */
import React from 'react';
import {Router, browserHistory} from 'react-router';
import {render} from 'react-dom';
import routes from './routes';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadTasks} from './actions/taskActions';

const store = configureStore();
store.dispatch(loadTasks());

render(
	(
		<Provider store={store}>
			<Router history={browserHistory} routes={routes} />
		</Provider>
	),
	document.getElementById('root'));