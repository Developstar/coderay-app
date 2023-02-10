import {Routes, Route} from 'react-router-dom'
import './App.css';

import Home from "./Pages/Home"
import CodeRay from './Pages/CodeRay';
import SignUp from './Pages/SignUp';

function App() {
  return (
  <div className="App">
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/coderay" element = {<CodeRay />} />
      <Route path="/signup" element = {<SignUp/>} />
    </Routes>
  </div>

  );
}

export default App;