import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import profileReducer from './profileReduser';
import dialogsReducer from './dialogsReduser';
import navbarReducer from './navbarReduser';
import usersReducer from './usersReduser';
import authReducer from './authReduser';
import appReducer from './appReduser';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    navbar: navbarReducer,
    auth: authReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;