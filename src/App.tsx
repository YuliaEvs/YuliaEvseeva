import './App.css';
import Header from './Components/Header';
import './script';
import RunningLine from './Components/RunningLine';
import BallPointer from './Components/BallPointer';
import Projects from './Components/Projects';

function App() {


  return (
    <>
      <div className='home-container'>
        {/* <div className='home-wrap'> */}
          <Header/>
          <Projects/>
          <RunningLine/>
          <BallPointer/>
        {/* </div> */}
      </div>
    </>
  )
}

export default App
