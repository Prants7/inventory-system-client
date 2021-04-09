import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                </ul>
            </nav>
        )
    }

}

export default Navigation;