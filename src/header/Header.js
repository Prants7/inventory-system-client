import React from 'react';
import Navigation from '../navigation/Navigation';
import AccountSituation from '../accountSituation/AccountSituation';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navigation/>
                <AccountSituation accountToken = {this.props.accountToken}/>
            </div>
        )
    }

}

export default Header;