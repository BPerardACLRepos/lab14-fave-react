import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                {!this.props.token && <>
                    <NavLink exact activeClassName="current-page" to="/">
                        Sign In
                </NavLink>
                    <NavLink exact activeClassName="current-page" to="/signup">
                        Sign Up
                </NavLink>
                </>}
                {this.props.token && <>
                    <NavLink exact activeClassName="current-page" to="/favorites">
                        Favorites
                </NavLink>
                    <NavLink exact activeClassName="current-page" to="/search">
                        Search
                </NavLink>
                    <button onClick={this.props.handleLogout}>
                        Log Out
                </button>
                </>}
            </div>
        );
    }
}