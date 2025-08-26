export const sendChatbotMessage = async (message, context) => {
  // Placeholder: Simulasi response
  return new Promise((resolve) => {
    setTimeout(() => {
      if (message.toLowerCase().includes("persamaan eksponensial")) {
        resolve({
          reply: "Persamaan eksponensial adalah persamaan yang variabelnya berada pada pangkat. Contoh: 2^x = 8. Berikut 5 soal latihan:",
          quiz: [
            { question: "1. 2^x = 16, berapa nilai x?", answer: "4" },
            { question: "2. 3^y = 27, berapa nilai y?", answer: "3" },
            { question: "3. 5^z = 125, berapa nilai z?", answer: "3" },
            { question: "4. 4^a = 64, berapa nilai a?", answer: "3" },
            { question: "5. 10^b = 1000, berapa nilai b?", answer: "3" },
          ],
        });
      } else {
        resolve({
          reply: `Materi "${message}" belum tersedia. Silakan pilih materi lain.`,
          quiz: [],
        });
      }
    }, 1200);
  });
};
