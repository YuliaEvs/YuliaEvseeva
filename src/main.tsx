import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Preloader from './Components/Preloader.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Delay />
  </React.StrictMode>,
)


function Delay() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []); 

  return show ? <Preloader /> : <App />;
}


const cursor = document.querySelector(".cursor"); //folow cursor on mousemove
var timeout;

document.addEventListener('mousemove', (e) => {
 let x = e.pageX;
 let y = e.pageY;

 cursor.style.top = y + "px";
 cursor.style.left = x + "px";
 cursor.style.display = "block";


//cursor effects on mouse stopped

function mouseStopped() {
  cursor.style.display = "none";
}
clearTimeout(timeout);
timeout = setTimeout(mouseStopped, 2000);
});

//cursor effects on mouseout
document.addEventListener('mouseout', () => {
  cursor.style.display = "none";
 });


 const toggleButton = document.querySelector(".dropdown-toggle");
 document.addEventListener("click", (ev) =>{

 })