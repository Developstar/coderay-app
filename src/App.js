import {Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
  <div className="App">
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="sign_up" element = {<Home />} />
      <Route path="/" element = {<Home/>} /> 
    </Routes>
  </div>
  );
}

export default App;