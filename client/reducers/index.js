/**
 * Created by yangbo on 17/1/3.
 */
"use strict";
import {routerStateReducer} from 'redux-router';
import {combineReducers} from 'redux';
import {ADD_NUMBER, RECEIVE_POSTS, REQUEST_POSTS} from '../actions'

const reducers = (state='', action) => {
    switch (action.type){
        case ADD_NUMBER:
            return action.number;
        default:
            return state
    }
};


const users = (state={
    isFetching : false,
    items : []
}, action) => {
    switch (action.type){
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
};
const reducer = combineReducers({
    router: routerStateReducer,
    reducers,
    users
});
export default reducer