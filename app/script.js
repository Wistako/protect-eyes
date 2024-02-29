import React, { useState } from 'react';
import { render } from 'react-dom';

const App = () => {
  const [status, setStatus] = useState('off');
  const [time, setTime] = useState(5);
  const [timer, setTimer] = useState(null);
  
  const playBell = () => {
    const bell = new Audio('./sounds/bell.wav');
    bell.play();
  };
  
  if(time === 0) {
    setStatus('off');
    setTime(1200);
    clearInterval(timer);
    playBell();
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };


  const handleStart = () => {
    setStatus('on');
    const interval = setInterval(() => {
      setTime(time => time - 1);
    }, 1000)
    setTimer(interval);
    playBell();
  };

  const handleStop = () => {
    setStatus('off');
    clearInterval(timer);
    setTime(1200);
    playBell();
  }

  return (
    <div>
      <h1>Protect your eyes</h1>
      <p>According to optometrists in order to save your eyes, you should follow the 20/20/20. It means you should to rest your eyes every 20 minutes for 20 seconds by looking more than 20 feet away.</p>
      <p>This app will help you track your time and inform you when it's time to rest.</p>

      {status === 'off' ?
        <img src="./images/work.png" />
        :
        <img src="./images/rest.png" />
      }
      <div className="timer">
        {formatTime(time)}
      </div>

      {status === 'off' ?
        <button className="btn" onClick={handleStart}>Start</button>
        :
        <button className="btn" onClick={handleStop}>Stop</button>
      }
      <button className="btn btn-close" onClick={() => window.close()}>X</button>
    </div>
  )
};

render(<App />, document.querySelector('#app'));
