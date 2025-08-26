import { createSlice } from '@reduxjs/toolkit';

const chatbotSlice = createSlice({
  name: 'chatbot',
  initialState: {
    messages: [],
    userInput: '',
    loading: false,
  },
  reducers: {
    addMessage(state, action) {
      state.messages.push(action.payload);
    },
    setUserInput(state, action) {
      state.userInput = action.payload;
    },
    clearMessages(state) {
      state.messages = [];
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { addMessage, setUserInput, clearMessages, setLoading } = chatbotSlice.actions;

export default chatbotSlice.reducer;