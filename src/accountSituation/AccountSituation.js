import React from 'react';

class AccountSituation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { accountToken: "" };
    }

    render() {
        if(this.isLoggedin()) {
            return this.loggedInView();
        }
        else {
            return this.notLoggedInView();
        }
    }

    isLoggedin() {
        return this.state.accountToken.length > 0;
    }

    notLoggedInView() {
        return(
            <div>
                Not Logged in
            </div>
        )
    }

    loggedInView() {
        return(
            <div>
                Logged in
            </div>
        )
    }

}

export default AccountSituation;