import './header.css';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenu() {
        setIsMenuOpen((prevState) => !prevState);

        document.body.style.overflow = isMenuOpen ? "unset" : "hidden";
    }

    return (
        <header>
            <div className='header-logo-container'>
                <div className='header-logo-wrapper'>
                    <a href='#contact'></a>
                </div>
            </div>
            <div className='navbar'>
                <div className="changeMode">
                    <button className='lamp'>
                        <span className="material-symbols-rounded">light</span>
                    </button>
                </div>
                    <div className='nav-burger' onClick={handleMenu}>
                       
                        <div className={`nav-burger-wrap ${isMenuOpen ? 'active' : ""}`}>
                            <div className='burger-line-1'></div>
                            <div className='burger-line-2'></div>
                        </div>

                    <div className='menu-content' style={{display: isMenuOpen ? 'block' : 'none'}}>
                        {   
                            <div className='menu'>
                                <a href='#'>INFO</a>
                                <p className='resume'>Download Resume</p>
                                    <div className="link-wrap">
                                        <span className="material-symbols-outlined">
                                            data_loss_prevention
                                        </span>
                                    </div>
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
