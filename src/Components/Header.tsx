import './header.css';
// import { useState } from 'react';
// import profile from '../assets/preview (5).webp'

export default function Navbar() {

    //Navigation bar effects on scroll
 window.addEventListener("scroll", () => {
  const header = document.querySelector("header") as HTMLElement | null;
  if (header) {
  header.classList.toggle("sticky", window.scrollY > 0);
  }
});
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    // function handleMenu() {
    //     setIsMenuOpen((prevState) => !prevState);

    //     document.body.style.overflow = isMenuOpen ? "unset" : "hidden";
    // }

    return (
        <header>
            <div className="nav-bar">
                <div className='header-logo-container'>
                    <div className='header-logo-wrapper'>
                        <a href='#'></a>
                    </div>
                </div>
                <div className='navigation'>
                    <div className='nav-items'>
                        <a  className="active" href='#home'>HOME</a>
                        <a href='#about'>ABOUT</a>
                        <a href='#skills'>SKILLS</a>
                        <a href='#services'>SERVICES</a>
                        <a href='#portfolio'>PORTFOLIO</a>
                        <a href='#contact'>CONTACT</a>
                    </div>    
                </div>
            </div>
        </header>
    )
}
