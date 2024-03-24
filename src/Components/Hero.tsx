import './hero.css';
import heroImage from '../assets/hero-img-1.jpeg'

export default function Hero() {
    
    return (
        <section>
            <div className='hero-container'>
                <div className="globe-wrap">
                    <div className="globe"></div>
                    <div className="location-wrap">
                        <span>Virginia</span>
                        <span>USA</span>
                    </div>
                </div>
                <div className='hero-wrapper'>
                    <div id="hero-img-1">
                        <img alt="Profile Image"
                            className="hero-img rounded shadow-lg"
                            height="auto"
                            width="700px"
                            src={heroImage}
                        />
                    </div>
                    <div className="about">
                        <div className='greeting'>
                           
                            Hello and Welcome, Friend! I'm Yulia, a Code Whisperer 🧙‍♂️ or a Junior Software Engineer 👨‍💻🚀
                        <div>
                        </div>
                        <div>
                        <div className="about-content-container" onclick="toggleSubmenu('submenu1')">
                            <div className='dropdown-toggle'/>My Toolbox 🛠️</div>
                                <div className='dropdown-toggleSubmenu'/>
                        </div>
                        <div>
                        <div className="about-content-container" onclick="toggleSubmenu('submenu1')">
                            <div className='dropdown-toggle'/>Fun Facts 🎉</div>
                                <div className='dropdown-toggleSubmenu'>
                                - I believe in the power of `ctrl + z`.
                                - My favorite debugging tool is hope.
                                - I'm on a first-name basis with the `404 Error`.
                                - I craft code that sometimes even surprises me.
                                - I have intense debates with my computer - and occasionally, I win.
                            </div>
                        </div>
                        <div>
                        <div className="about-content-container" onclick="toggleSubmenu('submenu1')">
                            <div className='dropdown-toggle'/>The Dream 🌟</div>
                            <h3 className='about-submenu'>
                                One day, I aspire to use my powers for good, automating everything to the point where my coffee machine will start brewing just by thinking about it. Until then, I'll keep translating human ideas into computer actions, one pixel at a time.
                                `So, if you need someone to turn your `if` into reality, or your `else` into success, you know where to find me. Let's make magic happen – with code!</h3>
                        </div>
                        <div>
                        <div className="about-content-container" onclick="toggleSubmenu('submenu1')">
                           <div className='dropdown-toggle'/>Beyond the Code 🚀</div>
                           <h3 className='about-submenu'>
                            When I'm not on a quest to squash bugs or decipher cryptic error messages, you might catch me ... 🤔 umm... no, it's all that I am currently doing 😳</h3>
                        </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div> 
        </section>
    )
}