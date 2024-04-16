import './scroll.css'

//Website dark/light theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-theme", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn?.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme) {
  document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
  themeBtn?.classList[savedIcon === "sun" ? "add" : "remove"] ("sun");
}

//Scroll to top button
const scrollToTopBtn = document.querySelector(".scrollToTop-btn") as HTMLElement | null; 

window.addEventListener("scroll", function() {
  scrollToTopBtn?.classList.toggle("active", window.scrollY > 500);
});

scrollToTopBtn?.addEventListener("click", () => {
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
      document.querySelector(".nav-items a[href*=" + id + "]")?.classList.add("active");
    }
    else {
      document.querySelector(".nav-items a[href*=" + id + "]")?.classList.remove("active");
    }
  });
});



export default function Scroll() {

    return (
      <>
        <div className="scrollToTop-btn flex-center">
            <i className="fas fa-arrow-up"></i>
        </div>

        {/* Light/Dark theme */}
        <div className="theme-btn flex-center">
          <i className='fas fa-moon'></i>
          <i className='fas fa-sun'></i>
        </div>
      </>
    )
    
}
