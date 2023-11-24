//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {React, useState} from 'react';
import {Button, TextField, Checkbox, FormControl, FormControlLabel, Select, InputLabel, MenuItem} from '@mui/material';

function App() {

  const [message, setMessage] = useState("Try me"); // [state, setState]
  const options = [];

  const getHelloWorld = async () => {
    try {
      const response = await axios.get('/message', /* your data here */);
      console.log(response.data !== undefined ? response.data : "No data received");
      setMessage(response.data !== undefined ? response.data : "No data received");
      // This should log "Hello World" if the server is set up correctly
    } catch (error) {
      console.error('Error making GET request:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='form-background'>
          <h1>Student Organization Match Card</h1>
          What is your name?
          <br/>
          <TextField id="outlined-basic" label="Full Name" variant="outlined"/>
          <br/>
          Your Major
          <br/>
          <TextField id="outlined-basic" label="Major" variant="outlined"/>
          <br/>
          Your Gender
          <br/>
          <TextField id="outlined-basic" label="Gender" variant="outlined"/>
          <br/>
          What types of organizations are you interested in?
          <br/>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Academic</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={options}
              label="Academic"
              multiple={true}
              //onChange={handleChange}
            >
              {/* <MenuItem><FormControlLabel control={<Checkbox/>} label="Computer Science"/></MenuItem>
              <MenuItem><FormControlLabel control={<Checkbox/>} label="Business"/></MenuItem> */}
              <MenuItem>CS</MenuItem>
              <MenuItem>Business</MenuItem>
            </Select>
            <FormControlLabel control={<Checkbox/>} label="Arts and Music"/>
            <FormControlLabel control={<Checkbox/>} label="Club Sports"/>
            <FormControlLabel control={<Checkbox/>} label="Cultural"/>
            <FormControlLabel control={<Checkbox/>} label="Fraternities"/>
            <FormControlLabel control={<Checkbox/>} label="Honor Societies"/>
            <FormControlLabel control={<Checkbox/>} label="Political"/>
            <FormControlLabel control={<Checkbox/>} label="Religious"/>
            <FormControlLabel control={<Checkbox/>} label="Service"/>
            <FormControlLabel control={<Checkbox/>} label="Social"/>
            <FormControlLabel control={<Checkbox/>} label="Sororities"/>
            <FormControlLabel control={<Checkbox/>} label="Special Interest"/>
          </FormControl>
          <br/>
          What are your hobbies or areas of interest?
          <br/>
          <TextField id="outlined-basic" label="Hobbies or Areas of Interest" variant="outlined"/>
          <br/>
        </div>
        <p>
          {message}
        </p>
        <Button variant="contained" color='primary' sx={styles} onClick={getHelloWorld}>Submit</Button>
        <br/>
      </header>
    </div>
  );
}

export default App;

const styles = {
  '&.MuiButton-contained': {backgroundColor: '#0C0'}
}
