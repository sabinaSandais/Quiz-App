import React from 'react';
import AnswerButton from './AnswerButton';
import './Question.css';
import parse from 'html-react-parser';

const Question = ({ question, handleAnswer, selectedAnswer }) => {
  const isMultipleChoice = question.type === 'multiple';
  const answers = isMultipleChoice
    ? question.incorrect_answers.concat(question.correct_answer).sort()
    : ['True', 'False'];

  return (
    <div>
      <p>{parse(question.question)}</p>
      <div className="answer-buttons">
        {answers.map((answer, index) => (
          <AnswerButton
            key={index}
            answer={answer}
            onClick={() => handleAnswer(answer)}
            isCorrect={answer === question.correct_answer}
            isSelected={selectedAnswer === answer}
            disabled={selectedAnswer !== ''}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
