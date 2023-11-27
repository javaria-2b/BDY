"use client"
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
    targetDate: string; // format: 'YYYY-MM-DD'
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const target = new Date(targetDate);
            const difference = target.getTime() - now.getTime();

            if (difference > 0) {
                // Calculate time left
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            } else {
                setTimeLeft('Hooray! It’s the birthday!');
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="text-center">
            <h1 className='text-2xl'>Birthday Birthday Yayy hoooo!!!!</h1>
            <h1 className="text-4xl font-bold text-pink-500">Countdown to Sumas's Birthday 💖🥳</h1>
            <p className="text-4xl font-bold mt-5">{timeLeft}</p>
        </div>
    );
};

export default CountdownTimer;
