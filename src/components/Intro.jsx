import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import odontoquiz from "../assets/Intro-OdontoQuiz.svg";

const Intro = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(" + odontoquiz + ")" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center bg-white bg-opacity-90 text-center p-8 md:p-12 rounded-2xl shadow-xl w-full max-w-md mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-4 md:mb-8">
          ODONTOQUIZ
        </h1>
        <button
          className="px-8 py-4 bg-blue-700 text-white text-lg md:text-2xl font-semibold rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-blue-800"
          onClick={startQuiz}
        >
          Empezar el Quiz
        </button>
      </motion.div>
    </div>
  );
};

export default Intro;
