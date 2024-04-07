import './index.css';
import "./main";
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import RunningLine from './Components/RunningLine';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {

  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Portfolio/>
      {/* <RunningLine/>
      <Contact/> */}
      <Footer/>
      
    </>
  )
}

export default App
