import React, { createContext, useState, useContext } from "react";

const ChatbotContext = createContext();

export function ChatbotProvider({ children }) {
  const [conversation, setConversation] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <ChatbotContext.Provider value={{
      conversation, setConversation,
      currentQuiz, setCurrentQuiz,
      quizIndex, setQuizIndex,
      score, setScore
    }}>
      {children}
    </ChatbotContext.Provider>
  );
}

export function useChatbot() {
  return useContext(ChatbotContext);
}
