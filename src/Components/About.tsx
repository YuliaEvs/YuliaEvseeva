import aboutImgHero from '../assets/girl987.jpg'
import './about.css'



export default function About() {
    
    return (    
        <section className='about section' id='about'>
            <div className="container flex-center" >
                
                {/* <div className="about-text">🛠️ My Toolbox</div>
                <button className='dropdown-toggle'/>
                    <div className='toggleSubmenu'>
                    JavaScript, C#, Java, REACT, ... 
                    </div>

                <div className="about-content-container" >
                    <button className='dropdown-toggle'/>Fun Facts 🎉</div>
                        <div className='toggleSubmenu'>
                            - I believe in the power of `ctrl + z`.
                            - My favorite debugging tool is hope.
                            - I'm on a first-name basis with the `404 Error`.
                            - I craft code that sometimes even surprises me.
                            - I have intense debates with my computer - and occasionally, I win.
                        </div>
                    
                <div>
                    <div className="about-content-container">
                        <button className='dropdown-toggle'/>The Dream 🌟</div>
                        <div className='toggleSubmenu'>
                            One day, I aspire to use my powers for good, automating everything to the point where my coffee machine will start brewing just by thinking about it. Until then, I'll keep translating human ideas into computer actions, one pixel at a time.
                            `So, if you need someone to turn your `if` into reality, or your `else` into success, you know where to find me. Let's make magic happen – with code!
                            </div>
                    </div>
                <div>
                    <div className="about-content-container">
                        <div className='dropdown-toggle'/>Beyond the Code 🚀</div>
                        <div className='toggleSubmenu'>
                            When I'm not on a quest to squash bugs or decipher cryptic error messages, you might catch me ... 🤔 umm... no, it's all that I am currently doing 😳
                        </div>
                </div> */}
                <div className='about-img'>
                    <img src={aboutImgHero} alt="about-image" />
                </div>
            </div>
        </section>    
    )
}