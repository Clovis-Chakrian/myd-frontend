import { useEffect, useState } from 'react';
import style from './Cronometro.module.css';

export const Cronometro = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const totalSeconds = 24 * 60 * 60;
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime + 1) % totalSeconds);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const secondsRemaining = 24 * 60 * 60 - time;
  const hours = Math.floor(secondsRemaining / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;
  const percentage = (time / (24 * 60 * 60)) * 100;

  return (
    <div className={style.timerContainer}>
      <div className={style.circle}>
        <svg>
          <circle cx="100" cy="100" r="90"></circle>
          <circle cx="100" cy="100" r="90" style={{ strokeDashoffset: `calc(565 - (565 * ${percentage}) / 100)` }}></circle>
        </svg>
        <div className={style.time}>
          {`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
        </div>
      </div>
    </div>
  );
};
