import './App.css';
import ScrollReveal from 'scrollreveal';


function App() {
  //Navigation Bar Effects On Scroll
  window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  // Services Section - Modal
  const serviceModals = document.querySelectorAll(".service-modal");
  const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
  const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

  const serviceModal = function(modalClick) {
    serviceModals[modalClick].classList.add("active");
  }

  learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
      serviceModal(i);
    });
  });

  modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
      serviceModals.forEach((modalView) => {
        modalView.classList.remove("active");
      });
    });
  });

  // Portfolio Section - Modal
  const portfolioModals = document.querySelectorAll(".portfolio-modal");
  const imgCards = document.querySelectorAll(".img-card");
  const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

  const portfolioModal = function(modalClick) {
    portfolioModals[modalClick].classList.add("active");
  }

  imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
      portfolioModal(i);
    });
  });

  portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
      portfolioModals.forEach((portfolioModalView) => {
        portfolioModalView.classList.remove("active");
      });
    });
  });

// Website Dark/Light Theme
document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.querySelector(".theme-btn");

  // Toggle theme and icon on button click
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
    themeBtn.classList.toggle("moon");

    // Save the current theme and icon state
    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
 
  });

  // Function to get current theme (dark or light)
  const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
  
  // Function to get current icon (sun or moon)
  const getCurrentIcon = () => themeBtn.classList.contains("moon") ? "moon" : "sun";
  
  // Retrieve saved theme and icon from localStorage
  const savedTheme = localStorage.getItem("saved-theme");
  const savedIcon = localStorage.getItem("saved-icon");
  
  // Apply saved theme and icon if they exist
  if(savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    document.body.classList[savedTheme === "dark" ? "remove" : "add"]("light-theme");
    themeBtn.classList[savedIcon === "moon" ? "add" : "remove"] ("moon");
    
  } else {
    // Default to dark theme and sun icon
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    themeBtn.classList.add("moon");
    localStorage.setItem("saved-theme", "dark");
    localStorage.setItem("saved-icon", "moon");
  }
});

//Scroll To Top Button
  const scrollToTopBtn = document.querySelector(".scrollToTop-btn"); 

  window.addEventListener("scroll", function() {
    scrollToTopBtn.classList.toggle("active", window.scrollY > 500);
  });

  scrollToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  //Navigation menu items active on page scroll
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset; 

    sections.forEach(current => {
      let sectionHeight = current.offsetHeight;
      let sectionTop = current.offsetTop - 50;
      let id = current.getAttribute("id");

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
      }
      else {
        document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
      }
    });
  });

//Responsive navigation Menu Toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
})

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
})

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navigation.classList.remove("active");
  })
})

//Scroll Reveal Animations
//Common Reveal Options To Create Reveal Animations
ScrollReveal({ 
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 50
 });

 ScrollReveal().reveal(".home .info h2, section-title-01, section-title-02", { delay: 400, origin: "left" });
 ScrollReveal().reveal(".home .info h3, .home .info p", { delay: 500, origin: "right" });
 ScrollReveal().reveal(".home .info .btn, .about-info .btn", { delay: 600, origin: "bottom" });
 ScrollReveal().reveal(".madia-icons i, .contact-left li", { delay: 400, origin: "left", interval: 200 });
 ScrollReveal().reveal(".home-img, about-img", { delay: 400, origin: "bottom" });
 ScrollReveal().reveal(".about .description, .copy-right", { delay: 500, origin: "right" });
 ScrollReveal().reveal(".skills-description, service-description, contact-left h2", { delay: 600, origin: "left" });
 ScrollReveal().reveal(".experience-card, .service-card, .education, .portfolio .img-card", { delay: 700, origin: "bottom", interval: 200 });
 ScrollReveal().reveal(".footer .group, .contact-left h2, .description h3, .description h4", { delay: 400, origin: "top", interval: 200 });

  return (
    <div className="App"></div>
  );
}

export default App;