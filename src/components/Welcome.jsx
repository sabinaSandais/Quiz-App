
import './Welcome.css';
// import { QuizContext } from '../QuizContext';

const Welcome = () => {
    // const { setDifficulty } = useContext(QuizContext);
  
    return (
      <div className="welcome-page">
        <h1 className='h1'>Welcome to the Quiz</h1>
        <p className='text'>Select difficulty level to start the quiz:</p>
        <div className='buttons'>
          <button className='btn1' onClick={() => setDifficulty('easy')}>Easy</button>
          <button className='btn2' onClick={() => setDifficulty('medium')}>Medium</button>
          <button className='btn3' onClick={() => setDifficulty('hard')}>Hard</button>
        </div>
      </div>
    );
  };
  
  export default Welcome;