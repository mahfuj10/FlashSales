import React, { useEffect, useState } from 'react'

export default function CountdownTimer() {

  const [hour, setHour] = useState('00');
  const [minute, setMinute] = useState('00');
  const [second, setSecond] = useState('00');
   
  useEffect(() => {
    const countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

    const updateTimer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) { // EXPIRED
        clearInterval(updateTimer);
        setHour('00')
        setMinute('00')
        setSecond('00')
      } else {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setHour(hours < 10 ? `0${hours}` : hours)
        setMinute(minutes < 10 ? `0${minutes}` : minutes)
        setSecond(seconds < 10 ? `0${seconds}` : seconds)
      }
    }, 1000);

    return () => {
      clearInterval(updateTimer);
    };
  }, []);


  return (
    <div className='flex gap-x-4'>
        <button className='bg-orange-500 py-2 px-3 rounded-md text-lg text-white'>{hour}</button>
        <button className='bg-orange-500 py-2 px-3 rounded-md text-lg text-white'>{minute}</button>
        <button className='bg-orange-500 py-2 px-3 rounded-md text-lg text-white'>{second}</button>
    </div>
  )
}
