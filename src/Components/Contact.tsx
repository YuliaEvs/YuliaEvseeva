import './contact.css';

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (

    <div className="contact-container">
            <p>
                Let's work together
            </p>
            
            <p>
                email: info.evseeva@gmail.com
            <p>
                <a href="https://www.linkedin.com/in/yulia-evseeva/" >
                    LinkedIn
                </a>
            </p>
            </p>
             <a href="#home" onClick={scrollToTop}>
              Back to top
            </a>
        <footer>
            <p>
                © 2024 Yulia Evseeva
            </p>    
        </footer>
    </div>

  );
}
