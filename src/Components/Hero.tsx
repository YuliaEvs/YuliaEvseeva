import './hero.css';
import background from '../assets/backgroung-img.png'

export default function Hero() {
    
    return (
        <div className='hero-container'>
            <div className="globe-wrap">
                <div className="globe"></div>
                <div className="location-wrap">
                    <div className='locationName'>
                        <span>Virginia</span>
                        <span>USA</span>
                    </div>
                    <div className='locationPoint'>
                        <span className="material-symbols-outlined">person_pin_circle</span>
                    </div>
                </div>
            </div>
            <div className="hero-wrapper">
                <div className='info'>
                    <h2 className='greeting'>Hello and Welcome, Friend!</h2> <br/>
                    <p>I'm Yulia, a Code Whisperer 🧙‍♂️ or a Software Engineer 👨‍💻</p>        
                </div>
            </div>  
        </div>
    )
}