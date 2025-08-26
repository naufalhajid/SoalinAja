import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ChatbotProvider } from "./context/ChatbotContext";
import { QuizProvider } from "./context/QuizContext";
import AppRoutes from "./routes/AppRoutes";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <AuthProvider>
      <ChatbotProvider>
        <QuizProvider>
          <BrowserRouter>
            <DarkModeToggle />
            <AppRoutes />
          </BrowserRouter>
        </QuizProvider>
      </ChatbotProvider>
    </AuthProvider>
  );
}

export default App;
