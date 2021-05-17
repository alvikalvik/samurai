import {createStore, combineReducers} from 'redux';
import profileReducer from './profileReduser';
import dialogsReducer from './dialogsReduser';
import navbarReducer from './navbarReduser';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer,
});

const store = createStore(reducers);


export default store;