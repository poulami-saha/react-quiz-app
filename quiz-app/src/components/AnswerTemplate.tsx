import { useState } from "react";
import "./AnswerTemplate.css";
import { AnswerOption } from "../model/model";

const AnswerTemplate: React.FC<{
  options: AnswerOption[];
  handleAnswer: (isCorrect: boolean) => void;
}> = ({ options, handleAnswer }) => {
  const [answer, setAnswer] = useState<boolean>(false);
  const [selected, setSelected] = useState<number | undefined>(undefined);

  const getOptionValue = (index: number) => {
    switch (index) {
      case 0:
        return "A";
      case 1:
        return "B";
      case 2:
        return "C";
      case 3:
        return "D";
    }
  };
  const clickHandler = (index: number, isCorrect: boolean) => {
    setSelected(index);
    setAnswer(isCorrect);
  };
  const nextHandler = () => {
    setSelected(undefined);
    handleAnswer(answer);
  };
  return (
    <div className="answer-container">
      <p className="answer-text">Select Answer</p>
      <div>
        {options.map((option: AnswerOption, index: number) => {
          return (
            <div
              key={index}
              className={selected === index ? "selectedOption" : "option"}
              onClick={() => clickHandler(index, option.isCorrect)}
            >
              <span className="option_text">{getOptionValue(index)}</span>
              {option.text}
            </div>
          );
        })}
      </div>
      <button className="next" onClick={nextHandler}>
        Next
      </button>
    </div>
  );
};

export default AnswerTemplate;
