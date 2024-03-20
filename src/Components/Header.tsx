import './header.css';
import { useState } from 'react';


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [isActive, setIsActive] = useState(false);

    function handleMenu() {
        setIsMenuOpen((prevState) => !prevState);
        // setIsActive(!isActive);

        document.body.style.overflow = isMenuOpen ? "unset" : "hidden";
    }

    // const lineStyles = (line: number) => ({
    //     transform: isMenuOpen
    //       ? `translateY(${line === 1 ? '' : '-'}0.75rem) rotate(${line === 1 ? '' : '-'}45deg)`
    //       : 'none',
    //     transition: 'transform 0.3s ease-in-out',
    // });

    return (
        <header>
            <div className='header-logo-container'>
                <div className='header-logo-wrapper'>
                    <a href='#contact'></a>
                </div>
                <div className='submenu-wrap'>
                    <p className='submenu'>You-lee-ya</p>
                </div>
            </div>
            <div className='navbar'>
                    <button className="changeMode">
                        <span className="material-symbols-rounded">light</span>
                    </button>

                    <div className='nav-burger' onClick={handleMenu}>
                       
                            <div className={`nav-burger-wrap ${isMenuOpen ? 'active' : ""}`}>
                                
                                <div className='burger-line-1'></div>
                                <div className='burger-line-2'></div>
                            </div>
                  

                            <div className='menu-content' style={{display: isMenuOpen ? 'block' : 'none'}}>
                                {   
                                    <div className='menu'>
                                        <a href='#'>INFO</a>
                                        <p className='submenu'>about me</p>
                                        <a href='#'>WORK</a>
                                        <a href='#'>CONTACT</a>
                                        <p className='submenu'>for collaboration</p>
                                    </div>    
                                }
                            </div>

                    </div> 

            </div>
        </header>
    )
}
