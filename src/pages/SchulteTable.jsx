import { useState, useEffect } from 'react';

function SchulteTable() {
  const [numbers, setNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(1);
  const [gameStarted, setGameStarted] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const generateTable = () => {
    const nums = Array.from({ length: 25 }, (_, i) => i + 1);
    for (let i = nums.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    setNumbers(nums);
    setCurrentNumber(1);
    setGameStarted(true);
    setStartTime(Date.now());
    setEndTime(null);
  };

  const handleNumberClick = (number) => {
    if (number === currentNumber) {
      if (currentNumber === 25) {
        setEndTime(Date.now());
        setGameStarted(false);
      } else {
        setCurrentNumber(prev => prev + 1);
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto text-center">
      <h1 className="text-3xl font-bold mb-8 text-primary">Schulte Table</h1>
      
      <div className="mb-6">
        <button onClick={generateTable} className="btn">
          {gameStarted ? 'Restart' : 'Start Game'}
        </button>
      </div>

      {gameStarted && (
        <div className="mb-4">Find number: {currentNumber}</div>
      )}

      <div className="grid grid-cols-5 gap-2 mb-6">
        {numbers.map((number, index) => (
          <button
            key={index}
            onClick={() => handleNumberClick(number)}
            className={`
              aspect-square flex items-center justify-center
              text-xl font-bold rounded-lg
              ${number === currentNumber ? 'bg-primary' : 'bg-dark-100'}
              hover:bg-primary-hover transition-colors
            `}
          >
            {number}
          </button>
        ))}
      </div>

      {endTime && (
        <div className="text-lg">
          Completed in: {((endTime - startTime) / 1000).toFixed(2)} seconds
        </div>
      )}
    </div>
  );
}

export default SchulteTable;