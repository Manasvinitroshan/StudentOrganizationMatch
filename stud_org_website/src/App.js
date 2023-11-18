import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const handlePostRequest = async () => {
    try {
      const response = await axios.post('/message', /* your data here */);
      console.log(response.data !== undefined ? response.data : "No data received");
      // This should log "Hello World" if the server is set up correctly
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handlePostRequest}>Make POST Request</button>
      </header>
    </div>
  );
}

export default App;
