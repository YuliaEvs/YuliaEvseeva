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

//Portfolio section -Modal
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

const openPortfolioModal = (modalClick: number) => {
  if (portfolioModals[modalClick]) {
    portfolioModals[modalClick].classList.add("active");
  }
};

imgCards.forEach((imgCard, i) => {
  imgCard.addEventListener("click", () => {
    openPortfolioModal(i);
  });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
  portfolioCloseBtn.addEventListener("click", () => {
    portfolioModals.forEach((portfolioModalView) => {
      portfolioModalView.classList.remove("active");
    });
  });
});


//Website dark/light theme

//Responsive navigation menu toggle

