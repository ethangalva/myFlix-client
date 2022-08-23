import React, {useState} from "react";

import './register-view.scss';

export function RegisterView(props) {
    const [ RegisterUsername, setRegistered] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(RegisterUsername);

        // post request to create user in db via api call
        props.onRegister(RegisterUsername);
    };

    return (
        <form>
            <label>
                REGISTER Username:
                <input type='text' value={RegisterUsername} onChange={e => setRegistered(e.target.value)} />
            </label>
            <button type='submit' onClick={handleSubmit}>register?</button>
        </form>
    );
}