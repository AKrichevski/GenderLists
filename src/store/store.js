import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import usersReducer from './users/reducer';

const rootReducer = combineReducers({
  users: usersReducer
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;

