// import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
// import Navbar from './components/Navbar';
// import { Home } from './components/Home';
// import About from './components/About';
// import NoteState from './context/notes/NoteState';
// import { Alert } from './components/Alert';
// import Signup from './components/Signup';
// import Login from './components/Login';

// function App() {
//   return (
//     <>
//       <NoteState>
//         <Router>
//           <Navbar />
//           <Alert message="This is amazing React course" />
//           <div className="container">
//             <Routes>
//               <Route exact path="/">
//                 <Home />
//               </Route>
//               <Route exact path="/about">
//                 <About />
//               </Route>
//               <Route exact path="/login">
//                 <Login />
//               </Route>
//               <Route exact path="/signup">
//                 <Signup />
//               </Route>
//             </Routes>
//           </div>
//         </Router>
//       </NoteState>
//     </>
//   );
// }

// export default App;


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

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="This is amazing React course" />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />  {/* Change here */}
              <Route path="/about" element={<About />} />  {/* Change here */}
              <Route path="/login" element={<Login />} />  {/* Change here */}
              <Route path="/signup" element={<Signup />} />  {/* Change here */}
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
