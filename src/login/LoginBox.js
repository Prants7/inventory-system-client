import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ConnectionService from "../restConnection/connectionService";
import "./LoginBox.css";

/*class LoginBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }*/

export default function LoginBox(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        registerUser();
    }

    async function registerUser() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        console.log(username.valueOf());

        var urlencoded = new URLSearchParams();
        urlencoded.append("username", username.valueOf());
        urlencoded.append("password", password.valueOf());

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        //var address = ConnectionService.getBaseAddress() +"public/users/register";
        //console.log(address);
        var result = await fetch("http://localhost:8080/public/users/register", requestOptions)
            .then(response => response.text())
            /*.then(result => console.log(result))
            .catch(error => console.log('error', error));*/
        console.log(result);

        props.tokenAssigning(result);
    }

    return (
        <div className="LoginBox">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        autoFocus
                        type="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Form.Group>
                <Button block size ="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
        </div>
    )
}

//export LoginBox;