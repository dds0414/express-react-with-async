/**
 * Created by yangbo on 17/1/3.
 */
import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'

export default class Root extends Component {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <ReduxRouter />
            </Provider>
        )
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
