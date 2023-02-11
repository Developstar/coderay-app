import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home" ;
import SignUp from './Pages/SignUp';


function App() {
  return (
  <div className="App">
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/signup" element = {<SignUp/>} />
      

    </Routes>
  </div>

  );
}

export default App;