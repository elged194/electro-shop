import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const totalTime = 33600; // Initial time in seconds (1 hour)
  const [timeLeft, setTimeLeft] = useState(totalTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return { hrs, mins, secs };
  };

  const { hrs, mins, secs } = formatTime(timeLeft);

  return (
    <div className="flex flex-col items-center">
      <div className="m-1">
        <p>Hurry Up! Offer ends in:</p>
      </div>
      <div className="text-4xl font-bold mb-4 flex space-x-2">
        <span className="bg-gray-200 font-light py-1.5 px-2.5 rounded-lg">
          {hrs.toString().padStart(2, "0")}
        </span>
        <span>:</span>
        <span className="bg-gray-200 font-light py-1.5 px-2.5 rounded-lg">
          {mins.toString().padStart(2, "0")}
        </span>
        <span>:</span>
        <span className="bg-gray-200 font-light py-1.5 px-2.5 rounded-lg">
          {secs.toString().padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
