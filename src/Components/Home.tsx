import './home.css';
import hero from '../assets/girl987.jpg'

//Scroll to top button
const globeScrollDown = document.querySelector(".globe-wrap") as HTMLElement | null; 

window.addEventListener("globeScroll", function() {
    globeScrollDown?.classList.toggle("active", window.scrollY < 500);
});

export default function Home() {
    
    return (
        <section className="home flex-center" id='home'>
            <div className="globe-wrap">
                <div className="globe"></div>
                    <div className="location-wrap">
                        <div className='locationName'>
                            <span>Virginia</span>
                            <span>USA</span>
                        </div>
                </div>
            </div>
            <div className='home-container'>
                <div className="media-icons">
                    <a href="https://www.linkedin.com/in/yulia-evseeva/"><i className='fab fa-linkedin'></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100002105156155"><i className='fab fa-facebook-f'></i></a>
                    <a href="https://twitter.com/YuliaEvsevsa"><i className='fab fa-twitter'></i></a>
                </div>
                <div className="info">
                    <h2>Hello and Welcome!</h2>
                    <h3> I'm Yulia, Software Engineer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa illum voluptatum, commodi tempora hic esse repellat dicta id quia iusto ea! Quasi consequuntur rem, facilis corrupti quam saepe eveniet assumenda?
                    </p>
                    <a href="#contact" className='btn'>Contact Me <i className='fas fa-arrow-circle-right'></i></a>
                </div> 
                <div className="home-img">
                    <img src={hero} alt="home-image" />
                </div> 
            </div>
            <a href="#about" className='scroll-down'>Scroll Down <i className='fas fa-arrow-down'></i></a>
        </section>
    )
}

