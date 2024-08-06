import React, { useEffect, useState, useContext } from 'react';
import { fetchQuestions } from '../api';
import { QuizContext } from '../QuizContext';
import Question from './Question';
import Score from './Score';

const Quiz = () => {
  const { difficulty, setFinalScore } = useContext(QuizContext);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const fetchedQuestions = await fetchQuestions(difficulty);
        setQuestions(fetchedQuestions);
        setLoading(false);
      } catch (error) {
        // Handle error if needed
      }
    };

    loadQuestions();
  }, [difficulty]);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);

    if (answer === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer('');
      } else {
        setFinalScore(score + (answer === questions[currentQuestion].correct_answer ? 1 : 0));
      }
    }, 1000);
  };

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="container quiz">
      <h2>Question {currentQuestion + 1}/{questions.length}</h2>
      <Question
        question={currentQ}
        handleAnswer={handleAnswer}
        selectedAnswer={selectedAnswer}
      />
      <Score score={score} />
    </div>
  );
};

export default Quiz;
