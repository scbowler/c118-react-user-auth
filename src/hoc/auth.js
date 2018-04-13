import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (WrappedComponent){
    class Auth extends Component {
        componentDidMount(){
            if(!this.props.auth){
                this.props.history.push('/');
            }
        }

        componentWillReceiveProps(nextProps){
            if(!nextProps.auth){
                this.props.history.push('/');
            }
        }

        render(){
            return <WrappedComponent {...this.props}/>
        }
    }

    return connect(mapStateToProps)(Auth);
}

function mapStateToProps(state) {
    return {
        auth: state.user.auth
    }
}
