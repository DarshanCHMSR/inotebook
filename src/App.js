import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';  // Note the change here
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import Newlog from './components/Newlog';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const [backgroundImage, setBackgroundImage] = useState('url(https://t4.ftcdn.net/jpg/08/57/33/39/360_F_857333945_GUMsMA2X86auO8knHib9NGsCfzWM65PS.jpg)');
  
    // Function to change the background image
    const changeBackground = (image) => {
      console.log(image);
      setBackgroundImage(`url(${image})`);
    };
  
  return (
    <div className='app' style={{ 
      backgroundImage: backgroundImage,
     
    // backgroundAttachment: "fixed",
    // backgroundRepeat: 'no-repeat'
      
    }
    }>
      <NoteState>
        <Router>
          <Navbar changeBackground={changeBackground}/>
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home  showAlert={showAlert}/>} />  {/* Change here */}
              <Route path="/about" element={<About  />} />  {/* Change here */}
              <Route path="/login" element={<Login  showAlert={showAlert} changeBackground={changeBackground}/>} />  {/* Change here */}
              <Route path="/signup" element={<Signup showAlert={showAlert} />} />  {/* Change here */}
              <Route path="/newlog" element={<Newlog  />} />  {/* Change here */}
            </Routes>
          </div>
        
        </Router>
      </NoteState>
      <Footer />
    </div>
  );
}

export default App;
