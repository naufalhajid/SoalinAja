import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl">SoalinAja</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link to="/chatbot" className="text-white hover:underline">Chatbot</Link>
                    </li>
                    {isAuthenticated ? (
                        <>
                            <li>
                                <Link to="/profile" className="text-white hover:underline">Profile</Link>
                            </li>
                            <li>
                                <Link to="/logout" className="text-white hover:underline">Logout</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/login" className="text-white hover:underline">Login</Link>
                            </li>
                            <li>
                                <Link to="/register" className="text-white hover:underline">Register</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;