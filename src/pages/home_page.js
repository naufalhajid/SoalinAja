import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to SoalinAja</h1>
            <p className="text-lg mb-8">Your interactive educational platform with AI Chatbot.</p>
            <div className="flex space-x-4">
                <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Login
                </Link>
                <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Register
                </Link>
                <Link to="/chatbot" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
                    Chat with AI
                </Link>
            </div>
        </div>
    );
};

export default HomePage;