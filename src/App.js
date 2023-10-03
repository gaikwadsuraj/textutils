import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light'); // wheather dark mode is enabled

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2d1717';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    } 
  }

  return (
    <>
      {/* <Navbar mode={darkMode} aboutText="Go to google"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
      <div className="container my-3">
            <TextForm heading="Enter the text to analyze below" mode={mode}/>
      </div>
    </> 
  )
}

export default App;