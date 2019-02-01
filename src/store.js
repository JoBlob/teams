import thunk from 'redux-thunk';
import {createStore, compose, combineReducers, applyMiddleware} from 'redux';

import teamsReducer from './reducers/teams';
import usersReducer from './reducers/users';
import searchReducer from './reducers/search';

const rootReducer = combineReducers({
    teams: teamsReducer,
    users: usersReducer,
    search: searchReducer
})

const configureStore = (initialState = {}) => {

    // redux devtools
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );
    return store;
};
export default configureStore;