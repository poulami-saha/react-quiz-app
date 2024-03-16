import { Question } from "../model/model";
import "./Result.css";

const Result: React.FC<{
  questions: Question[];
  answers: boolean[];
  resetQuiz: () => void;
}> = ({ questions, answers, resetQuiz }) => {
  return (
    <div className="result_container">
      <p className="header">
        Your Results {answers.filter((answer) => !!answer).length}/{questions.length}
      </p>
      <button className="reset" onClick={resetQuiz}>
        Click to Reset
      </button>
      <div className="questions">
        <ol>
          {questions.map((question: Question, index: number) => {
            return (
              <li key={index}>
                {question.question} {answers[index] ? "\u2713" : "\u292B"}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
export default Result;
