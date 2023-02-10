import './App.css';
import {Routes, Route} from "react-router-dom"
import CodeRay from './pages/CodeRay';
import SignUp from './pages/SignUp';


function App() {
  return (
  <div className="App">
    <Routes>
      <Route path="/" element = {<Home/>} />

    </Routes>
  </div>

  );
}

export default App;