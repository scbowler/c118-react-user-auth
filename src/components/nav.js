import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeAuth } from '../actions';

class Nav extends Component {
    renderButton(){
        return this.props.auth ?
            <button onClick={() => this.props.changeAuth(false)} className="btn btn-danger">Sign Out</button>
        : <button onClick={() => this.props.changeAuth(true)} className="btn btn-outline-light">Sign In</button>
    }

    render(){
        const linkStyle = {
            color: 'white'
        };

        return (
            <nav className="navbar bg-primary mb-4">
                <Link style={linkStyle} className="nav-link" to="/">Home</Link>
                <Link style={linkStyle} className="nav-link" to="/about-us">About Us</Link>
                <Link style={linkStyle} className="nav-link" to="/secret-docs">Secret Docs</Link>
                <Link style={linkStyle} className="nav-link" to="/operatives-list">Operatives List</Link>
                {
                    this.props.auth ?
                        <button onClick={() => this.props.changeAuth(false)} className="btn btn-danger">Sign Out</button>
                        : <button onClick={() => this.props.changeAuth(true)} className="btn btn-outline-light">Sign In</button>
                }
            </nav>
        )
    }
}

function mapStateToProps(state){
    return {
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {changeAuth: changeAuth})(Nav);
