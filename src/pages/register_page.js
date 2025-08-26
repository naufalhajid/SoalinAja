import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../services/auth_service';
import { setUser } from '../store/slices/auth_slice';
import Button from '../components/button_component';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const user = await registerUser(email, password);
            dispatch(setUser(user));
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Register</h1>
            <form onSubmit={handleRegister} className="flex flex-col w-80">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-2 p-2 border border-gray-300 rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-2 p-2 border border-gray-300 rounded"
                    required
                />
                {error && <p className="text-red-500 mb-2">{error}</p>}
                <Button text="Register" onClick={handleRegister} />
            </form>
        </div>
    );
};

export default RegisterPage;