import './footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="about group">
                    <h2><a href="#about">Yulia Evseeva</a></h2>
                </div>
                <div className="hr"></div>
                <div className="info group">
                    <ul>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="hr"></div>
                <div className="follow group">
                     <ul>
                        <li><a href=""><i className='fab fa-facebook'></i></a></li>
                        <li><a href=""><i className='fab fa-linkedin'></i></a></li>
                        <li><a href=""><i className='fab fa-twitter'></i></a></li>
                    </ul>
                </div>
                </div>
            <div className="footer-copyright group">
                <p>© 2024 by Yulia Evseeva. All rights reserved.</p>
            </div>
        </footer>
    )
}