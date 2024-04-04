import './home.css';
import hero from '../assets/girl987.jpg'

export default function Hero() {
    
    return (
        <section className="home flex-center" id='home'>
            <div className='home-container'>
                <div className="media-icons">
                    <a href="#"><i className='fab fa-linkedin'></i></a>
                    <a href="#"><i className='fab fa-facebook-f'></i></a>
                    <a href="#"><i className='fab fa-twitter'></i></a>
                </div>
                <div className="info">
                    <h2>Hello and Welcome, Friend! I am Yulia</h2>
                    <h3>Code Whisperer/Software Engineer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa illum voluptatum, commodi tempora hic esse repellat dicta id quia iusto ea! Quasi consequuntur rem, facilis corrupti quam saepe eveniet assumenda?
                    </p>
                    <a href="#contact" className='btn'>Contact Me <i className='fas fa-arrow-circle-right'></i></a>
                </div> 
                <div className="home-img">
                    <img src={hero} alt="hero-image" />
                </div> 
            </div>
            <a href="#about" className='scroll-down'>Scroll Down<i className='fas fa-arrow-down'></i></a>
        </section>
    )
}

            {/* <div className="globe-wrap">
                    <div className="globe"></div>
                    <div className="location-wrap">
                        <div className='locationName'>
                            <span>Virginia</span>
                            <span>USA</span>
                        </div>
                    </div>
                </div> */}