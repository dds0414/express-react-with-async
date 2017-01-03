/**
 * Created by yangbo on 17/1/3.
 */
"use strict";
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {add_number, fetchPostsUser} from '../actions'

class App extends Component{

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(fetchPostsUser())
    }

    handleClick(){
        const { dispatch } = this.props;
        dispatch(fetchPostsUser('admin'))
    }


    render(){
        const {users} = this.props;
        return (
            <div>
                <button onClick={this.handleClick}>click</button>
                <ul>
                    {users.items.map((item,index)=>
                        <li key={index}>{item.name}</li>
                    )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProp) => ({
    users: state.users
});


export default connect(mapStateToProps)(App)