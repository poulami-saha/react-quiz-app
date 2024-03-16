import { useState } from "react";
import Questions from "../model/Questions.json";
import Result from "./Result";
import "./Quiz.css";
import QuestionAnswer from "./QuestionAnswer";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const answerHandler = (isCorrect: boolean) => {
    setCurrentQuestion((currentQuestion) => currentQuestion + 1);
    setAnswers((answers) => [...answers, isCorrect]);
  };

  const resetQuizHandler = () => {
    setCurrentQuestion(0);
    setAnswers([]);
  };

  return (
    <div className="quiz">
      {currentQuestion < Questions.length && (
        <QuestionAnswer
          question={Questions[currentQuestion]}
          handleAnswer={answerHandler}
          questionIndex={currentQuestion + 1}
          totalCount={Questions.length}
        />
      )}
      {currentQuestion === Questions.length && (
        <Result
          questions={Questions}
          answers={answers}
          resetQuiz={resetQuizHandler}
        />
      )}
    </div>
  );
};

export default Quiz;
