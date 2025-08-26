import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store_config';
import HomePage from './pages/home_page';
import LoginPage from './pages/login_page';
import RegisterPage from './pages/register_page';
import ChatbotPage from './pages/chatbot_page';
import Navbar from './components/navbar_component';
import Footer from './components/footer_component';
import ProtectedRoute from './components/protected_route';
import './app.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route 
            path="/chatbot" 
            element={
              <ProtectedRoute>
                <ChatbotPage />
              </ProtectedRoute>
            } 
          />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;