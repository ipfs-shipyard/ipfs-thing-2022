import { useState, useEffect } from 'react';

export default function Countdown({targetDate}) {
    
  const calculateTimeLeft = (targetDate) => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
  });
  
  const Counter = (props) => {
    const formattedValue = props.value < 10 ? `0${props.value}` : `${props.value}`
    return (
      <div className="w-20 text-center font-exo">
        <div className="text-5xl mb-2 font-bold">{formattedValue}</div>
        <div className="text-sm text-green-400 font-bold">{props.label}</div>
      </div>
    )
  }
  
  return (
    <div className="container max-w-8xl mx-auto -mt-3 mb-3 px-20">
    <div className="bg-blue-500 rounded-lg text-white py-8">
      <div className="flex gap-12 justify-center ">
        <Counter value={timeLeft.days} label="DAYS" />
        <Counter value={timeLeft.hours} label="HRS" />
        <Counter value={timeLeft.minutes} label="MIN" />
        <Counter value={timeLeft.seconds} label="SEC" />
      </div>
    </div>
  </div>
  )
}
