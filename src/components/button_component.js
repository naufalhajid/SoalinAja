import React from 'react';

const Button = ({ text, onClick, style }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 transition duration-300 ${style}`}
        >
            {text}
        </button>
    );
};

export default Button;