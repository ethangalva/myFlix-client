import React, { useState } from 'react';

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
        <form>
            <label>
                Username:
                <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <button type='submit' onClick={handleSubmit}>Submit</button>
            <br />
            <button>Register</button>
        </form>
    );
}