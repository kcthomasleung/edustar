import { useState } from 'react';

export default function Quiz() {
  const question = 'What is the capital of France?';
  const options = ['Paris', 'London', 'Berlin', 'Madrid'];
  const correctAnswer = 'Paris';

  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (selectedOption === correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div>
      <h1>Quiz</h1>
      <form onSubmit={handleFormSubmit}>
        <p>{question}</p>
        {options.map((option, index) => (
          <div key={index}>
            <input 
              type="radio" 
              id={`option-${index}`} 
              name="option" 
              value={option} 
              onChange={handleOptionChange}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      {isCorrect !== null && (
        <p>{isCorrect ? 'Correct answer!' : 'Wrong answer. Try again.'}</p>
      )}
    </div>
  );
}
