import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Preloader from './Components/Preloader.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Delay />
  </React.StrictMode>,
)


function Delay() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []); 

  return show ? <Preloader /> : <App />;
}
