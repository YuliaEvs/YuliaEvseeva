import './index.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import RunningLine from './Components/RunningLine';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import About from './Components/About';

function App() {


  return (
    <>
      <div className='home-container'>
        <Header/>

        <section id="hero">
          <Hero/>
        </section>
        
        <section id='about'>
          <About/>
        </section>

        <section id='projects'>
          <Projects/>
        </section>
            
        <div id='running-line'>
          <RunningLine/>
        </div>
        
        <section id='contact'>
          <Contact/>
        </section>
        
      </div>
    </>
  )
}

export default App
