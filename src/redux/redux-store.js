import {createStore, combineReducers} from 'redux';
import profileReducer from './profileReduser';
import dialogsReducer from './dialogsReduser';
import navbarReducer from './navbarReduser';
import usersReducer from './usersReduser';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    navbar: navbarReducer,
});

const store = createStore(reducers);


export default store;