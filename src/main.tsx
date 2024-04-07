import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Preloader from './Components/Preloader.tsx';


const root = document.getElementById('root');
if (root) {
  const container = ReactDOM.createRoot(root);
container.render(
  <React.StrictMode>
    <Delay />
  </React.StrictMode>
);
}

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


const cursor = document.querySelector('.cursor') as HTMLElement | null; //folow cursor on mousemove
let timeout: ReturnType<typeof setTimeout>;

document.addEventListener('mousemove', (e) => {
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
document.addEventListener('mouseout', () => {
  if (cursor) {
    cursor.style.display = 'none';
  }
 });

//Navigation bar effects on scroll
 window.addEventListener('scroll', () => {
  const header = document.querySelector('header') as HTMLElement | null;
  if (header) {
  header.classList.toggle('sticky', window.scrollY > 0);
  }
});

//Services section - Modal
const serviceModals = document.querySelectorAll('.service-modal');
const learnmoreBtns = document.querySelectorAll('.learn-more-btn');
const modalCloseBtns = document.querySelectorAll('.modal-close-btn');

const openModal = (modalClick: number) => {
  if (serviceModals[modalClick]) {
    serviceModals[modalClick].classList.add('active');
  }
};

learnmoreBtns.forEach((learnmoreBtn, i) => {
  learnmoreBtn.addEventListener('click', () => {
    openModal(i);
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
const portfolioModals = document.querySelectorAll('.portfolio-model');
const imgCards = document.querySelectorAll('.img-card');
const portfolioCloseBtns = document.querySelectorAll('.portfolio-close-btn');

const openPortfolioModal = (modalClick: number) => {
  if (portfolioModals[modalClick]) {
    portfolioModals[modalClick].classList.add('active');
  }
};

imgCards.forEach((imgCard, i) => {
  imgCard.addEventListener('click', () => {
    openPortfolioModal(i);
  });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
  portfolioCloseBtn.addEventListener('click', () => {
    portfolioModals.forEach((portfolioModalView) => {
      portfolioModalView.classList.remove('active');
    });
  });
});

//Our clients - Swiper
//Website dark/light theme
//Scroll to top button
//Navigation menu items active on page scroll
//Responsive navigation menu toggle
//Scrolll
