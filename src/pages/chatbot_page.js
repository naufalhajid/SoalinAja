import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChatbotResponse } from '../services/chatbot_service';
import { addMessage } from '../store/slices/chatbot_slice';
import LoadingSpinner from '../components/loading_spinner';

const ChatbotPage = () => {
    const [userInput, setUserInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messages = useSelector((state) => state.chatbot.messages);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userInput) return;

        dispatch(addMessage({ text: userInput, sender: 'user' }));
        setLoading(true);
        setUserInput('');

        const response = await fetchChatbotResponse(userInput);
        dispatch(addMessage({ text: response, sender: 'bot' }));
        setLoading(false);
    };

    return (
        <div className="chatbot-page">
            <h1>Chatbot Interaction</h1>
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.sender}>
                        {msg.text}
                    </div>
                ))}
                {loading && <LoadingSpinner />}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatbotPage;