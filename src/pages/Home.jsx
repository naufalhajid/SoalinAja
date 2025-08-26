import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "../components/Button";
import Card from "../components/Card";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleStart = () => {
    if (user) {
      navigate("/chatbot");
    } else {
      navigate("/login");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-[70vh]"
    >
      <Card className="max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">SoalinAja</h1>
        <p className="mb-6 text-lg text-gray-700 dark:text-gray-200">
          Platform edukasi interaktif untuk belajar materi sekolah dengan chatbot AI, latihan soal, dan evaluasi progres!
        </p>
        <Button onClick={handleStart} className="text-lg font-semibold">
          Mulai Belajar
        </Button>
      </Card>
      <div className="mt-8 flex gap-4">
        <Card>
          <h2 className="font-semibold text-blue-500">Fitur</h2>
          <ul className="list-disc ml-4 text-gray-600 dark:text-gray-300">
            <li>Chatbot AI Edukasi</li>
            <li>Latihan Soal Interaktif</li>
            <li>Dashboard Progress</li>
            <li>Dark Mode</li>
          </ul>
        </Card>
        <Card>
          <h2 className="font-semibold text-blue-500">Tentang</h2>
          <p className="text-gray-600 dark:text-gray-300">
            SoalinAja dibuat untuk membantu pelajar memahami materi dengan cara yang menyenangkan dan personal.
          </p>
        </Card>
      </div>
    </motion.div>
  );
}

export default Home;
