import React, { createContext, useState, useContext } from "react";

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [level, setLevel] = useState("SMP");
  const [cart, setCart] = useState([]);
  return (
    <QuizContext.Provider value={{ level, setLevel, cart, setCart }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext);
}
