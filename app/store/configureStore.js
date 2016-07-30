/**
 * Created by Vladimir on 7/30/2016.
 */
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
	return createStore(rootReducer, initialState, applyMiddleware(thunk));
}