import React from 'react';

class AccountSituation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }

    render() {
        if(this.isLoggedin()) {
            if(!this.hasUsername()) {
                this.getAccountName(this.props.accountToken);
            }
            return this.loggedInView();
        }
        else {
            return this.notLoggedInView();
        }
    }

    isLoggedin() {
        return this.props.accountToken.length > 0;
    }

    hasUsername() {
        return this.state.username.length > 0;
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
                Logged in as {this.state.username}
            </div>
        )
    }

    async getAccountName(bearerId) {
        var myHeaders = new Headers();
        var idType = "Bearer "
        myHeaders.append("Authorization", idType.concat(bearerId));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        var result = await fetch("http://localhost:8080/users/current", requestOptions)
        .then(response => response.json());
        //.then(response => response.text())
        /*.then(result => this.state.username = result)
        .catch(error => console.log('error', error));*/
        console.log(result);
        console.log(result.username);
        /*this.setState( {
            username : result.username
        });*/
        this.setState( {
            username: result.username
        })
    }


}

export default AccountSituation;