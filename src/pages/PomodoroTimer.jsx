import { useState, useEffect } from 'react';

function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleTimerComplete();
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleTimerComplete = () => {
    setIsRunning(false);
    if (isBreak) {
      setTimeLeft(25 * 60);
      setIsBreak(false);
    } else {
      setTimeLeft(5 * 60);
      setIsBreak(true);
    }
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60);
    setIsBreak(false);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="max-w-md mx-auto text-center">
      <h1 className="text-3xl font-bold mb-8 text-primary">Pomodoro Timer</h1>
      
      <div className="card mb-6">
        <div className="text-6xl font-bold mb-8">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
        
        <div className="space-x-4">
          <button onClick={toggleTimer} className="btn">
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button
            onClick={resetTimer}
            className="btn bg-gray-600 hover:bg-gray-700"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="text-gray-400">
        {isBreak ? 'Time for a break!' : 'Focus time'}
      </div>
    </div>
  );
}

export default PomodoroTimer;