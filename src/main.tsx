import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Preloader from './Components/Preloader.tsx';


ReactDOM.createRoot (document.getElementById('root')).render(
  <React.StrictMode>
    <Delay />
  </React.StrictMode>
);


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


const cursor = document.querySelector('.cursor'); //folow cursor on mousemove
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
  cursor.style.display = 'none';
 });


 const toggleButton = document.querySelector('.dropdown-toggle');
 document.addEventListener("click", (ev) =>{

 })

//Navigation bar effects on scroll
 window.addEventListener('scroll', function(){
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

//Services section - Modal
const serviceModals = document.querySelectorAll('.service-modal');
const learnmoreBtns = document.querySelectorAll('.learn-more-btn');
const modalCloseBtns = document.querySelectorAll('.modal-close-btn');

var modal = function(modalClick) {
  serviceModals[modalClick].classList.add('active');
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
  learnmoreBtn.addEventListener('click', () => {
    modal(i);
  });
});

modalCloseBtns.forEach((modalCloseBtn) => {
  modalCloseBtn.addEventListener('click', () => {
    serviceModals.forEach((modalView) => {
      modalView.classList.remove('active');
    });
  });
});


//Portfolio section -Modal


//Our clients - Swiper
//Website dark/light theme
//Scroll to top button
//Navigation menu items active on page scroll
//Responsive navigation menu toggle
//Scrolll
