export const fetchChatbotResponse = async (userInput) => {
    // Simulate a call to a chatbot API
    const response = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Chatbot response to: ${userInput}`);
        }, 1000);
    });

    return response;
};