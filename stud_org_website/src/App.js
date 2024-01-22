import './App.css';
import Questions from './pages/form.js';
import Results from './pages/results.js';
import {React} from 'react';
import {Routes, Route, HashRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Questions/>} /> 
          <Route path="/results" element={<Results/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;