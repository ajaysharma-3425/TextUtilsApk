import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import toast from 'react-hot-toast';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(" ")
    }, 1500);
  }
  const toggleMode=()=>{
    if (mode==="light") {
      setMode("dark");
      document.body.style.backgroundColor="#100c2d";
      showAlert("Dark Mode Enabled !","success");
      document.title="TextUtils - DarkMode  Enabled";
      toast.success('Dark Mode Enabled', {
        position: "bottom-center"
      })
      // setInterval(() => {
      //   document.title="TextUtils Is a Best!";
      // }, 1500);
      // setInterval(() => {
      //   document.title="DownLoad TextUtils!";
      // }, 5000);
    } else {
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode Enabled !","success");
      document.title="TextUtils - LightMode  Enabled";
      toast.success('Light Mode Enabled', {
        position: "bottom-center"
      })
      // setInterval(() => {
      //   document.title="TextUtils Is a Best!";
      // }, 1500);
      // setInterval(() => {
      //   document.title="DownLoad TextUtils!";
      // }, 5000);
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} EnableDarkMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3 '>
    <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Try TextUtils  WordCounter | CharacterCounter | RemoveExtraSpaces." mode={mode}/>}> 
          </Route>
          <Route exact path="/services" element={<Services mode={mode}/>}> 
          </Route>
          <Route exact path="/contact" element={<Contact mode={mode}/>}> 
          </Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
