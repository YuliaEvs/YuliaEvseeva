import './header.css';
import { useState } from 'react';
import profile from '../assets/preview (5).webp'

export default function Navbar() {
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
                    {/* <div className="changeMode">
                        <button className='lamp'>
                            <span className="material-symbols-rounded">light</span>
                        </button>
                    </div> */}
                        {/* <div className='nav-burger' onClick={handleMenu}>
                        
                            <div className={`nav-burger-wrap ${isMenuOpen ? 'active' : ""}`}>
                                <div className='burger-line-1'></div>
                                <div className='burger-line-2'></div>
                            </div>

                        <div className='sidebar' style={{display: isMenuOpen ? 'block' : 'none'}}>
                            {    */}
                                <div className='nav-items'>
                                    <a href='#hero'>HOME</a>
                                    <a href='#about'>ABOUT</a>
                                    <a href='#skills'>SKILLS</a>
                                    <a href='#services'>SERVICES</a>
                                    <a href='#portfolio'>Portfolio</a>
                                    <a href='#contact'>CONTACT</a>
                                </div>    
                            {/* }
                        </div>

                    </div>  */}

                </div>
            </div>
        </header>
    )
}
