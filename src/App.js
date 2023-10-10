import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // wheather dark mode is enabled

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2d1717';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success"); 
      document.title = 'TextUtils - Light Mode';
    } 
  }

  return ( 
    <>
    <Router>
      {/* <Navbar mode={darkMode} aboutText="Go to google"/> */}
      <Navbar title="TextUtils" aboutText ="About Us" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={
              <About></About>
            }>
            </Route>
            <Route exact path="/" element={
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
            }>
            </Route>
          </Routes>
        </div>
      </Router>
    </> 
  )
}

export default App;