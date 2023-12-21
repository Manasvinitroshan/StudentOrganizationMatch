//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {React, useEffect, useState} from 'react';
import {Button, TextField, Checkbox, FormControl, FormControlLabel, Select, InputLabel, MenuItem,Paper} from '@mui/material';



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

  const getData = async () => {
    try {
      const dataResponse = await axios.get('/');
      console.log(dataResponse.data !== undefined ? "Received the data" : "No data received");
      setMessage(dataResponse.data !== undefined ? dataResponse.data : "No data received");
      // This should log "Hello World" if the server is set up correctly
    } catch (error) {
      console.error('Error making GET request:', error);
    }
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Paper className='form-background' elevation={3}>
          <h1 className='fancyfont'>Student Organization Match Card</h1>
          <p className='fancyfont'>What is your name?</p>
          
          <TextField id="outlined-basic" label="Full Name" variant="outlined" className='fancyfont'   style={{ width: '300px' }}/>
          <br/>
            <p className='fancyfont'>What is your major?</p>
          
          <TextField id="outlined-basic" label="Major" variant="outlined"  style={{ width: '300px' }}/>

          <p className='fancyfont'>What is your email?</p>
          <TextField id="outlined-basic" label="Enter your email" variant="outlined"  style={{ width: '300px' }}/>

          <br/>
          <p className='fancyfont'>Your gender</p>
          <FormControl>
          <InputLabel id="demo-simple-select-label"  style={{ width: '300px' }}>Gender</InputLabel>


          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={options}
              label="Gender"
              multiple={true}
              style={{ width: '300px' }}
              //onChange={handleChange}
            >
              {/* <MenuItem><FormControlLabel control={<Checkbox/>} label="Computer Science"/></MenuItem>
              <MenuItem><FormControlLabel control={<Checkbox/>} label="Business"/></MenuItem> */}
              <MenuItem>Male</MenuItem>
              <MenuItem>Female</MenuItem>
              <MenuItem>Non-Binary</MenuItem>
              <MenuItem>Other</MenuItem>
              <MenuItem>Prefer not to say</MenuItem>
            </Select>

          </FormControl>
          
          <br/>
          <p className='fancyfont'>Your housing situation</p>
          <FormControl>
          <InputLabel id="demo-simple-select-label"  style={{ width: '300px' }}>Housing</InputLabel>


<Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={options}
    label="Housing Situation"
    multiple={true}
    style={{ width: '300px' }}
    //onChange={handleChange}
  >
    {/* <MenuItem><FormControlLabel control={<Checkbox/>} label="Computer Science"/></MenuItem>
    <MenuItem><FormControlLabel control={<Checkbox/>} label="Business"/></MenuItem> */}
    <MenuItem>On Campus</MenuItem>
    <MenuItem>Off Campus</MenuItem>
  </Select>

</FormControl>
          
          <br/>

          <p className='fancyfont'>What types of organizations are you interested in?</p>
        
          <FormControl>
            <InputLabel id="demo-simple-select-label"  style={{ width: '300px' }}>Organizations</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={options}
              label="Academic"
              multiple={true}
              style={{ width: '300px' }}
              //onChange={handleChange}
            >
              {/* <MenuItem><FormControlLabel control={<Checkbox/>} label="Computer Science"/></MenuItem>
              <MenuItem><FormControlLabel control={<Checkbox/>} label="Business"/></MenuItem> */}
              <MenuItem>Academic</MenuItem>
              <MenuItem>Art and Music</MenuItem>
              <MenuItem>Club Sports</MenuItem>
              <MenuItem>Cultural</MenuItem>
              <MenuItem>Fraternities</MenuItem>
              <MenuItem>Honor Societies</MenuItem>
              <MenuItem>Political</MenuItem>
              <MenuItem>Religious</MenuItem>
              <MenuItem>Service</MenuItem>
              <MenuItem>Social</MenuItem>
              <MenuItem>Sororities</MenuItem>
              <MenuItem>Special Interest</MenuItem>
            </Select>
          

          </FormControl>
          <br/>
          <p className='fancyfont'>Cultural Organization: if you are interested in cultural organizations, please list any ethnicities/cultures that you may be interested in.</p>
          <TextField id="outlined-basic" label="Enter your answer" variant="outlined"  style={{ width: '600px' }}/>
          <br/>
          <br/>
          <p className='fancyfont'>Religious Organization: if you are interested in religious organizations, please list any specific religions that you may be interested in.</p>
          <TextField id="outlined-basic" label="Enter your answer" variant="outlined"  style={{ width: '600px' }}/>
          <br/>
          <br/>
          <p className='fancyfont' >Academic Interests: What are your areas of academic interest?</p>
          <TextField id="outlined-basic" label="Enter your answer" variant="outlined"  style={{ width: '600px' }}/>
          <br/>
          <p className='fancyfont' >What are your hobbies or areas of interest?</p>
          <TextField id="outlined-basic" label="Hobbies or Areas of Interest" variant="outlined"  style={{ width: '600px' }} multiline/>
          <br/>
              
          <br/>
          <button variant="contained" color='primary' sx={styles} onClick={getHelloWorld} className='round-button' >Submit</button>
        </Paper>
        
        
        <br/>
      </header>
    </div>
  );
}

export default App;

const styles = {
  '&.MuiButton-contained': {backgroundColor: '#0C0'}
}
