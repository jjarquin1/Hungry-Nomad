import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utlis/mutations';
import Auth from '../utlis/auth';

const Login = (props) => {

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
    console.log(JSON.stringify(error, null, 2));

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = formState;
        console.log(data);
        try {
            const { data } = await login({
                variables: { email, password },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.log(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };


    return (
        <div className="create">
            {data ? (
                <p>
                    Success! You may now head{' '}
                    <Link to="/">back to the homepage.</Link>
                </p>
            ) : (
                <form onSubmit={handleFormSubmit}>
                    <input
                        className="form-input"
                        placeholder="Your email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                    />
                    <input
                        className="form-input"
                        placeholder="******"
                        name="password"
                        type="password"
                        value={formState.password}
                        onChange={handleChange}
                    />
                    <button
                        className="btn btn-block btn-info"
                        style={{ cursor: 'pointer' }}
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            )}

            {!!error && (
                <div className="my-3 p-3 bg-danger text-white">
                    {error.message}
                </div>
            )}
        </div>
    );
}

export default Login;