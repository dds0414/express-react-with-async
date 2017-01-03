/**
 * Created by yangbo on 17/1/3.
 */
import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import DevTools from '../containers/DevTools'
import createHistory from 'history/lib/createBrowserHistory'
import routes from '../routes'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const finalCreateStore = compose(
    applyMiddleware(thunk),
    reduxReactRouter({ routes, createHistory }),
    DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState);

    if (module.hot) {
        const n = '../reducers';
        module.hot.accept(n, () => {
            const nextRootReducer = require("../reducers");
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}