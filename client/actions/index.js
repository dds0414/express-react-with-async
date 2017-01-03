/**
 * Created by yangbo on 17/1/3.
 */
"use strict";
import fetch from 'isomorphic-fetch'

export const ADD_NUMBER = 'ADD_NUMBER';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

//开始获取新闻action
function requestPosts() {
    return {
        type: REQUEST_POSTS
    }
}
//获取新闻成功的action
function receivePosts(json) {
    return {
        type: RECEIVE_POSTS,
        posts: json,
        receivedAt: Date.now()
    }
}

//获取文章，先触发requestPosts开始获取action，完成后触发receivePosts获取成功的action
function fetchPosts(serverUrl) {
    return dispatch => {
        dispatch(requestPosts());
        return fetch(serverUrl)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)))
    }
}

//是否需要获取文章
function shouldFetchPosts(state) {
    const users = state.users;
    if (!users) {
        return true
    }
    if (users.isFetching) {
        return false
    }
    return true
}


//如果需要则开始获取文章
export function fetchPostsUser(urlFlag='client') {
    let serverUrl;
    if(urlFlag == 'admin'){
        serverUrl = `http://localhost:3000/getAdminUser`
    }else {
        serverUrl = `http://localhost:3000/getUser`
    }
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState())) {
            return dispatch(fetchPosts(serverUrl))
        }
    }
}