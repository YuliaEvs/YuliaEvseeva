import './cursor.css'

// import React, { useEffect, useState } from 'react';

// const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0});
  
//     useEffect(() => {
//       const handleMouseMove = (event: MouseEvent) => {
//         setCursorPosition({ x: event.clientX, y: event.clientY});
//       };
//       document.addEventListener("mousemove", handleMouseMove);
  
//       return() => {
//         document.removeEventListener("mousemove", handleMouseMove);
//       };
//     }, []);

// export default function Cursor () {
    
//    return (
//     <div>Cursor</div>
//    )
//   };
  
export default function Cursor () {
    const cursor = document.querySelector(".cursor") as HTMLElement | null; //folow cursor on mousemove
    let timeout: ReturnType<typeof setTimeout>;
    
    document.addEventListener("mousemove", (e) => {
     let x = e.pageX;
     let y = e.pageY;
    
     if (cursor) {
    
     cursor.style.top = y + "px";
     cursor.style.left = x + "px";
     cursor.style.display = "block";
    }
    
    //cursor effects on mouse stopped
    
    function mouseStopped() {
      if (cursor) { 
        cursor.style.display = "none";
      }
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 5000);
    });
    
    //cursor effects on mouseout
    document.addEventListener("mouseout", () => {
      if (cursor) {
        cursor.style.display = "none";
      }
     });
        return (
    <div>Cursor</div>
   )
  };
