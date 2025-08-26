import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth_slice';
import chatbotReducer from './slices/chatbot_slice';
import profileReducer from './slices/profile_slice';
import themeReducer from './slices/theme_slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    chatbot: chatbotReducer,
    profile: profileReducer,
    theme: themeReducer,
  },
});

export default store;