import "./QuestionTemplate.css";
const QuestionTemplate: React.FC<{
  question: string;
  questionIndex: number;
  totalCount: number;
}> = ({ question, totalCount, questionIndex }) => {
  return (
    <div className="question_container">
      <p className="question-text">
        Question {questionIndex}
        <span className="totalCount">/{totalCount}</span>
      </p>
      <div className="question">{question}</div>
    </div>
  );
};
export default QuestionTemplate;
