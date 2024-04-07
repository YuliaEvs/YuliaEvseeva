import './footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="about group">
                    <h2>Yulia Evseeva</h2>
                    <p>Software Engineer</p>
                    <a href="#about">About Me</a>
                </div>
                <div className="hr"></div>
                <div className="info group">
                    <h3>More</h3>
                    <ul>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="hr"></div>
                <h3>Follow</h3>
                <ul>
                    <li><a href=""><i className='fab fa-facebook'></i></a></li>
                    <li><a href=""><i className='fab fa-linkedin'></i></a></li>
                    <li><a href=""><i className='fab fa-twitter'></i></a></li>
                </ul>
            </div>
            <div className="footer-copyright group">
                <p>© 2024 by Yulia Evseeva. All rights reserved.</p>
            </div>
        </footer>
    )
}