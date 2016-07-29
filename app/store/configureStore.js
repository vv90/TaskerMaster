/**
 * Created by Vladimir on 7/30/2016.
 */
import {createStore} from 'redux';
import rootReducer from '../reducers/rootReducer';

export default function configureStore(initialState) {
	return createStore(rootReducer, initialState);
}