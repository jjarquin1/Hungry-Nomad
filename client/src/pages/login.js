import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div className="create">
            <h2>Login and get food truckin!</h2>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                    className="form-input"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="btn btn-block btn-primary"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Login;