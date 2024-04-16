import './index.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import GetInTouch from './Components/GetInTouch';
// import Cursor from './Components/Cursor';
// import RunningLine from './Components/RunningLine';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Scroll from './Components/Scroll';

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Portfolio/>
      <GetInTouch />
      {/* <RunningLine/> */}
      <Contact/>
      <Footer/>
      <Scroll />
      {/* <Cursor/> */}
    </>
  )
}

export default App
