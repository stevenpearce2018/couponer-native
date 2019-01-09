import { createStore, combineReducers } from 'redux';
import placeReducer from './reducers/placeReducer';

const rootReducer = combineReducers({
  places: placeReducer
});

const configureStore = () => createStore(rootReducer);

export default configureStore;