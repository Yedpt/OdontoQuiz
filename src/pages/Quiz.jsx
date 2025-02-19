import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import bgImage from "../assets/Preguntas-OdontoQuiz.jpg";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  const navigate = useNavigate(); // Inicializa la función navigate

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "db.json")
      .then((res) => res.json())
      .then((data) => {
        // Aleatorizar las preguntas
        const shuffledQuestions = data.questions.sort(() => Math.random() - 0.5);
        setQuestions(shuffledQuestions);
      })
      .catch((err) => console.error("Error cargando preguntas:", err));
  }, []);

  const handleAnswerClick = (option) => {
    if (selectedAnswer === option) {
      setSelectedAnswer(null); // Permitir deseleccionar la respuesta
      setCorrectAnswer(null);
    } else {
      setSelectedAnswer(option);
      setCorrectAnswer(questions[currentQuestion].answer);
    }
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    setCorrectAnswer(null);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    navigate("/"); // Redirige a la página Intro
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md text-center bg-opacity-90">
        {showResult ? (
          <div>
            <h2 className="text-2xl font-extrabold text-gray-800">
              🎉 ¡Quiz completado!
            </h2>
            <p className="text-lg text-gray-700 mt-2">
              Tu puntaje: <span className="font-bold text-green-600">{score}</span> / {questions.length}
            </p>
            <button
              className="mt-6 w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl shadow-md transition-all"
              onClick={handleRestartQuiz} // Usa la función handleRestartQuiz
            >
              🔄 Reiniciar Quiz
            </button>
          </div>
        ) : questions.length > 0 ? (
          <div className="p-4 rounded-lg shadow-md">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 break-words text-center leading-snug">
              {questions[currentQuestion].question}
            </h2>
            <div className="mt-6 space-y-2 flex flex-col items-center">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`w-full md:w-2/3 px-4 py-2 text-sm md:text-base rounded-xl border shadow-md font-medium text-gray-700 transition-all
                    ${
                      selectedAnswer === option
                        ? option === correctAnswer
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                        : "bg-white hover:bg-gray-200"
                    }`}
                  onClick={() => handleAnswerClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              className={`mt-6 w-2/3 md:w-1/3 py-2 text-sm md:text-base rounded-xl font-semibold text-white shadow-md transition-all
                ${selectedAnswer === null ? "bg-gray-400 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600"}`}
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
            >
              {currentQuestion === questions.length - 1 ? "🎯 Finalizar" : "➡️ Siguiente"}
            </button>
          </div>
        ) : (
          <p className="text-gray-500">⏳ Cargando preguntas...</p>
        )}
      </div>
    </div>
  );
};

export default Quiz;
