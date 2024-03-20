import './index.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import RunningLine from './Components/RunningLine';
import Contact from './Components/Contact';
import Projects from './Components/Projects';

function App() {


  return (
    <>
      <div className='home-container'>
        <Header/>

        <section id="hero">
          <Hero/>
        </section>
        
        <section id='projects'>
          <Projects/>
        </section>
            
        <section id='running-line'>
          <RunningLine/>
        </section>
        
        <section id='contact'>
          <Contact/>
        </section>
        
      </div>
    </>
  )
}

export default App
