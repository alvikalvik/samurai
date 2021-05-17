import {createStore, combineReducers} from 'redux';
import profileReduser from './profileReduser';
import dialogsReduser from './dialogsReduser';
import navbarReduser from './navbarReduser';

const reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    navbar: navbarReduser,
});

const store = createStore(reducers);


export default store;