
import './about.css'

export default function About() {
    
    return (    
        <div className='about-container'>

            <div className="about-content-container" >
                <div className="about-text">🛠️ My Toolbox</div>
                <button className='dropdown-toggle' onclick="toggleSubmenu"/>
                    <div className='toggleSubmenu'>
                    JavaScript, C#, Java, REACT, ... 
                    </div>

                <div className="about-content-container" >
                    <button className='dropdown-toggle' onclick="toggleSubmenu('submenu1')"/>Fun Facts 🎉</div>
                        <div className='dropdown-toggleSubmenu'>
                            - I believe in the power of `ctrl + z`.
                            - My favorite debugging tool is hope.
                            - I'm on a first-name basis with the `404 Error`.
                            - I craft code that sometimes even surprises me.
                            - I have intense debates with my computer - and occasionally, I win.
                        </div>
                    
                <div>
                    <div className="about-content-container">
                        <button className='dropdown-toggle' onclick="toggleSubmenu('submenu1')"/>The Dream 🌟</div>
                        <h3 className='about-submenu'>
                            One day, I aspire to use my powers for good, automating everything to the point where my coffee machine will start brewing just by thinking about it. Until then, I'll keep translating human ideas into computer actions, one pixel at a time.
                            `So, if you need someone to turn your `if` into reality, or your `else` into success, you know where to find me. Let's make magic happen – with code!</h3>
                    </div>
                <div>
                    <div className="about-content-container">
                        <div className='dropdown-toggle' onclick="toggleSubmenu('submenu1')"/>Beyond the Code 🚀</div>
                        <h3 className='about-submenu'>
                            When I'm not on a quest to squash bugs or decipher cryptic error messages, you might catch me ... 🤔 umm... no, it's all that I am currently doing 😳</h3>
                </div>
                <div>
                    <img src="./" alt="" />
                </div>
            </div>
        </div>    
    )
}