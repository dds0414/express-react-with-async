/**
 * Created by yangbo on 17/1/2.
 */
import React from 'react'
import {render} from 'react-dom'
import configStore from './store/configStore'
import Root from './containers/Root'


const rootElement = document.getElementById('root');
const store = configStore();


render(
    <Root store={store} /> ,
    rootElement
);

