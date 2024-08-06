
import React from 'react';
import parse from 'html-react-parser';

const AnswerButton = ({ answer, onClick, isCorrect, isSelected, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={isSelected
        ? isCorrect
          ? 'correct'
          : 'incorrect'
        : ''
      }
      disabled={disabled}
    >
      {parse(answer)}
    </button>
  );
};

export default AnswerButton;

// import React from 'react';
// // import parse from 'html-react-parser';'


// import './AnswerButton.css';

// const AnswerButton = ({ answer, onClick, isCorrect, isSelected, disabled }) => {
//   return (
//     <button
//       onClick={onClick}
//       disabled={disabled}
//       className="answer-button"
//     >
//       {(answer)}
//       {isSelected && (
//         <img
//           src={isCorrect ? correctImg : incorrectImg}
//           alt={isCorrect ? 'Correct' : 'Incorrect'}
//         />
//       )}
//     </button>
//   );
// };

// export default AnswerButton;
