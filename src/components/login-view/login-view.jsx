import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from "react-bootstrap/FloatingLabel";
// remove after touchups

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './login-view.scss';
import '../../index.scss'

export function LoginView(props) {
    // assigns default values to username/password
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = (e) => {
        // stops default behavior of button [refreshing page when clicking submit]
        e.preventDefault();
        console.log(username, password);
        // Send request to server for auth
        props.onLoggedIn(username);
    };



    return (
        <Form>
            <Form.Group controlId='formUsername'>
                <Form.Label>Username:</Form.Label>
                <Form.Control type='text' onChange={e => setUsername(e.target.value)} placeholder='Enter username' />
            </Form.Group>

            <Form.Group controlId='formPassword' >
                <Form.Label>Password:</Form.Label>
                <Form.Control type='password' onChange={e => setPassword(e.target.value)} placeholder='Enter password' />
            </Form.Group>
            <Button variant='primary' type='submit' onClick={handleSubmit}>Submit</Button>
        </Form>
    );
}