import React, { useEffect, useState } from 'react';
import './ballPointer.css';

const BallPointer: React.FC = () => {

    const [isColusion, setIsColusion] = useState(false);

    useEffect(() => {
        const ballPointer = document.getElementById('ballPointer');
        
        function handleMouseMove(e: MouseEvent) {
        if (ballPointer) {
            ballPointer.style.top = e.clientY - 25 + 'px';
            ballPointer.style.left = e.clientX - 25 + 'px';
        }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

//   return <div id='ballPointer'></div>;
};

export default BallPointer;