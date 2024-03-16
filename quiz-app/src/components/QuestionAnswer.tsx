import { Question } from "../model/model";
import AnswerTemplate from "./AnswerTemplate";
import QuestionTemplate from "./QuestionTemplate";
import "./QuestionAnswer.css";

const QuestionAnswer: React.FC<{
  question: Question;
  handleAnswer: (isCorrect: boolean) => void;
  questionIndex: number;
  totalCount: number;
}> = ({ question, handleAnswer, questionIndex, totalCount }) => {
  const { question: currentQuestion, answerOptions } = question;
  return (
    <div className="container">
      <div className="question_section">
        <QuestionTemplate
          question={currentQuestion}
          questionIndex={questionIndex}
          totalCount={totalCount}
        />
      </div>
      <div className="answer_section">
        <AnswerTemplate options={answerOptions} handleAnswer={handleAnswer} />
      </div>
    </div>
  );
};
export default QuestionAnswer;
