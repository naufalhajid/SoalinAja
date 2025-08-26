import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useChatbot } from "../context/ChatbotContext";
import { sendChatbotMessage } from "../services/chatbotService";
import Button from "../components/Button";
import Card from "../components/Card";
import { motion } from "framer-motion";
import { updateUserProgress } from "../services/userService";
import { useNavigate } from "react-router-dom";

function Chatbot() {
  const { profile, user } = useAuth();
  const {
    conversation, setConversation,
    currentQuiz, setCurrentQuiz,
    quizIndex, setQuizIndex,
    score, setScore
  } = useChatbot();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showEval, setShowEval] = useState(false);
  const [recommend, setRecommend] = useState("");
  const navigate = useNavigate();

  const handleSend = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setConversation([...conversation, { sender: "user", text: input }]);
    const res = await sendChatbotMessage(input, { profile });
    setConversation((prev) => [
      ...prev,
      { sender: "bot", text: res.reply }
    ]);
    if (res.quiz && res.quiz.length > 0) {
      setCurrentQuiz(res.quiz);
      setQuizIndex(0);
      setScore(0);
    }
    setInput("");
    setLoading(false);
  };

  const handleQuizAnswer = (answer) => {
    const correct = currentQuiz[quizIndex].answer;
    if (answer.trim() === correct) {
      setConversation((prev) => [
        ...prev,
        { sender: "bot", text: "Benar! Penjelasan: " + correct + " adalah hasil pangkat yang sesuai. Naik level!" }
      ]);
      setScore(score + 1);
      setQuizIndex(quizIndex + 1);
    } else {
      setConversation((prev) => [
        ...prev,
        { sender: "bot", text: "Kurang tepat. Clue: Coba cek hasil pangkatnya." }
      ]);
    }
    if (quizIndex + 1 === currentQuiz.length) {
      setShowEval(true);
      setRecommend("Coba pelajari materi 'Logaritma' selanjutnya!");
      updateUserProgress(user.uid, [
        ...(profile.progress || []),
        {
          materi: conversation[conversation.length - 1]?.text,
          skor: score + (answer.trim() === correct ? 1 : 0),
          tanggal: new Date().toISOString(),
        },
      ]);
    }
  };

  const handleRestart = () => {
    setConversation([]);
    setCurrentQuiz([]);
    setQuizIndex(0);
    setScore(0);
    setShowEval(false);
    setRecommend("");
  };

  return (
    <Card className="max-w-2xl mx-auto mt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-2 text-blue-600">
          Halo, {profile?.name || "Pelajar"} 👋
        </h2>
        <div className="mb-4 text-gray-700 dark:text-gray-200">
          Materi apa yang ingin dipelajari hari ini?
        </div>
        <div className="mb-4">
          {conversation.map((msg, idx) => (
            <div key={idx} className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
              <span className={`inline-block px-3 py-2 rounded ${msg.sender === "user" ? "bg-blue-100 dark:bg-blue-900" : "bg-gray-100 dark:bg-gray-800"}`}>
                {msg.text}
              </span>
            </div>
          ))}
        </div>
        {!showEval && currentQuiz.length === 0 && (
          <div className="flex gap-2">
            <input
              type="text"
              className="border rounded px-3 py-2 flex-1"
              placeholder="Contoh: Matematika – Persamaan Eksponensial"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
            />
            <Button onClick={handleSend} disabled={loading}>
              Kirim
            </Button>
          </div>
        )}
        {!showEval && currentQuiz.length > 0 && quizIndex < currentQuiz.length && (
          <div className="mt-4">
            <div className="font-semibold mb-2">
              {currentQuiz[quizIndex].question}
            </div>
            <input
              type="text"
              className="border rounded px-3 py-2"
              placeholder="Jawaban Anda"
              onBlur={(e) => handleQuizAnswer(e.target.value)}
            />
          </div>
        )}
        {showEval && (
          <div className="mt-6">
            <h3 className="text-xl font-bold text-green-600">Evaluasi Akhir</h3>
            <p>Skor Anda: <span className="font-bold">{score}/{currentQuiz.length}</span></p>
            <p>Materi: {conversation[conversation.length - 1]?.text}</p>
            <p>Rekomendasi: {recommend}</p>
            <div className="flex gap-2 mt-4">
              <Button onClick={() => navigate("/")}>Kembali ke Home</Button>
              <Button onClick={handleRestart}>Belajar materi lain</Button>
              <Button onClick={() => navigate("/login")}>Logout</Button>
            </div>
          </div>
        )}
      </motion.div>
    </Card>
  );
}

export default Chatbot;
