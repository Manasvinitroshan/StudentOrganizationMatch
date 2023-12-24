//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {React, useState} from 'react';
import {Button, ListItemText, TextField, Checkbox, FormControl, FormControlLabel, Select, InputLabel, MenuItem, Paper} from '@mui/material';

const religions = ["Christianity", "Judaism", "Islam", "Hinduism", "Buddhism"];
const cultures = ["Korean", "Indian", "Pakistani", "African", "Greek"];
const academic = [
  "Artificial Intelligence", 
  "Biology", 
  "Business",
  "Chemistry",
  "Computer Science", 
  "Economics", 
  "Engineering", 
  "English", 
  "Geology",
  "Geophysics",
  "History", 
  "Language", 
  "Literature", 
  "Math", 
  "Medicine", 
  "Physics",
  "Psychology", 
  "Robotics"
];

const clubSports = ["Ultimate Frisbee"];

function App() {

  const [message, setMessage] = useState("Try me"); // [state, setState]
  const [gender, setGender] = useState("");
  const [housing, setHousing] = useState("");
  const [selectedCulture, setSelectedCulture] = useState([]);
  const [selectedReligion, setSelectedReligion] = useState([]);
  const [selectedAcademic, setSelectedAcademic] = useState([]);

  const getHelloWorld = async () => {
    let chosenOptions = selectedCulture.concat(selectedReligion, selectedAcademic);
    console.log(chosenOptions);
    const queryString = `?options=${chosenOptions.join('&options=')}`;
    // const optionsQueryParam = Array.isArray(chosenOptions) ? `?options=${chosenOptions.join('&options=')}` : '';
    try {
      //const response = await axios.get('/trial', chosenOptions);
      const response = await axios.get(`/trial${queryString}`);
      console.log(response.data !== undefined ? response.data : "No data received");
      setMessage(response.data !== undefined ? response.data : "No data received");
      // This should log "Hello World" if the server is set up correctly
    } catch (error) {
      console.error('Error making GET request:', error);
    }
  };

  const getData = async () => {
    try {
      const dataResponse = await axios.get('/clubs');
      console.log(dataResponse.data !== undefined ? "Received the data" : "No data received");
      setMessage(dataResponse.data !== undefined ? dataResponse.data : "No data received");
      // This should log "Hello World" if the server is set up correctly
    } catch (error) {
      console.error('Error making GET request:', error);
    }
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedCulture(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  
  const cultureChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedCulture(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const religionChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedReligion(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const academicChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedAcademic(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Paper className='form-background' elevation={3}>
          <h1>Student Organization Match Card</h1>
          <p className='fancyfont'>What is your name?</p>
          
          <TextField id="outlined-basic" label="Full Name" variant="outlined" className='fancyfont' style={{ width: '250px' }}/>
          <br/>
          
          <p className='fancyfont'>What is your major?</p>
          <TextField id="outlined-basic" label="Major" variant="outlined"  style={{ width: '250px' }}/>

          <p className='fancyfont'>What is your email?</p>
          <TextField id="outlined-basic" label="Enter your email" variant="outlined"  style={{ width: '250px' }}/>

          <br/>
          <p className='fancyfont'>Your gender</p>
          <FormControl>
            <InputLabel id="demo-simple-select-label"  style={{ width: '250px' }}>Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              label="Gender"
              style={{ width: '250px' }}
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
            <InputLabel id="demo-simple-select-label"  style={{ width: '250px' }}>Housing</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={housing}
                label="Housing Situation"
                style={{ width: '250px' }}
                //onChange={handleChange}
              >
                {/* <MenuItem><FormControlLabel control={<Checkbox/>} label="Computer Science"/></MenuItem>
                <MenuItem><FormControlLabel control={<Checkbox/>} label="Business"/></MenuItem> */}
                <MenuItem>On Campus</MenuItem>
                <MenuItem>Off Campus</MenuItem>
              </Select>
          </FormControl>
          <br/>
          <p className='fancyfont'>Cultural Organization: if you are interested in cultural organizations, please list any ethnicities/cultures that you may be interested in.</p>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Cultural</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedCulture}
              label="Academic"
              multiple={true}
              onChange={cultureChange}
              style={{ width: '250px' }}
              renderValue={(selected) => selected.join(', ')}
            >
              {/* <MenuItem><FormControlLabel control={<Checkbox/>} label="Computer Science"/></MenuItem>
                <MenuItem><FormControlLabel control={<Checkbox/>} label="Business"/></MenuItem> */}
              {cultures.map((option) => (
                <MenuItem key={option} value={option}>
                  <Checkbox checked={selectedCulture.indexOf(option) > -1} />
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* <br/> */}
          <br/>
          <p className='fancyfont'>Religious Organization: if you are interested in religious organizations, please list any specific religions that you may be interested in.</p>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Religious</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedReligion}
              label="Academic"
              multiple={true}
              onChange={religionChange}
              style={{ width: '250px' }}
              renderValue={(selected) => selected.join(', ')}
            >
             {/* <MenuItem><FormControlLabel control={<Checkbox/>} label="Computer Science"/></MenuItem>
                <MenuItem><FormControlLabel control={<Checkbox/>} label="Business"/></MenuItem> */}
              {religions.map((option) => (
                <MenuItem key={option} value={option}>
                  <Checkbox checked={selectedReligion.indexOf(option) > -1} />
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* <br/> */}
          <br/>
          <p className='fancyfont' >Academic Interests: What are your areas of academic interest?</p>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Academic</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedAcademic}
              label="Academic"
              multiple={true}
              onChange={academicChange}
              style={{ width: '250px' }}
              renderValue={(selected) => selected.join(', ')}
            >
            {/* <MenuItem><FormControlLabel control={<Checkbox/>} label="Computer Science"/></MenuItem>
            <MenuItem><FormControlLabel control={<Checkbox/>} label="Business"/></MenuItem> */}
              {academic.map((option) => (
                <MenuItem key={option} value={option}>
                  <Checkbox checked={selectedAcademic.indexOf(option) > -1} />
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br/>
          <p className='fancyfont'>Club Sports: What sports are you interested in?</p>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Club Sports</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedAcademic}
              label="Academic"
              multiple={true}
              onChange={academicChange}
              style={{ width: '250px' }}
              renderValue={(selected) => selected.join(', ')}
            >
            {/* <MenuItem><FormControlLabel control={<Checkbox/>} label="Computer Science"/></MenuItem>
            <MenuItem><FormControlLabel control={<Checkbox/>} label="Business"/></MenuItem> */}
              {academic.map((option) => (
                <MenuItem key={option} value={option}>
                  <Checkbox checked={selectedAcademic.indexOf(option) > -1} />
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br/>
          <p className='fancyfont' >What are your hobbies or areas of interest?</p>
          <TextField id="outlined-basic" label="Hobbies or Areas of Interest" variant="outlined"  style={{ width: '250px' }} multiline/>
          <br/>
          <p className='fancyfont' >Choose what other kind of organizations you are interested in</p>
          <FormControl>
            <FormControlLabel control={<Checkbox/>} label="Arts and Music"/>
            <FormControlLabel control={<Checkbox/>} label="Club Sports"/>
            {/* <FormControlLabel control={<Checkbox/>} label="Cultural"/> */}
            <FormControlLabel control={<Checkbox/>} label="Fraternities"/>
            <FormControlLabel control={<Checkbox/>} label="Honor Societies"/>
            <FormControlLabel control={<Checkbox/>} label="Political"/>
            {/* <FormControlLabel control={<Checkbox/>} label="Religious"/> */}
            <FormControlLabel control={<Checkbox/>} label="Service"/>
            {/* <FormControlLabel control={<Checkbox/>} label={<p className='fancyfont'>Service</p>}/> */}
            <FormControlLabel control={<Checkbox/>} label="Social"/>
            <FormControlLabel control={<Checkbox/>} label="Sororities"/>
            <FormControlLabel control={<Checkbox/>} label="Special Interest"/>
          </FormControl>
          <br/>
          <br/>
          <Button variant="contained" color='primary' sx={styles} onClick={getHelloWorld}>Submit</Button>
          <br/>
          {/* <br/>
          <button variant="contained" color='primary' sx={styles} onClick={getHelloWorld} className='round-button'>Submit</button> */}
        </Paper>
        
        
        <br/>
      </header>
    </div>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <div className='form-background'>
  //         <h1>Student Organization Match Card</h1>
  //         What is your name?
  //         <br/>
  //         <TextField id="outlined-basic" label="Full Name" variant="outlined"/>
  //         <br/>
  //         Your Major
  //         <br/>
  //         <TextField id="outlined-basic" label="Major" variant="outlined"/>
  //         <br/>
  //         Your Gender
  //         <br/>
  //         <TextField id="outlined-basic" label="Gender" variant="outlined"/>
  //         <br/>
  //         If you are interested in joining an academic related organization, what are your areas of academic interest?
  //         <br/>
  //         <FormControl>
  //           <InputLabel id="demo-simple-select-label">Academic</InputLabel>
  //             <Select
  //               labelId="demo-simple-select-label"
  //               id="demo-simple-select"
  //               value={selectedOptions}
  //               label="Academic"
  //               multiple={true}
  //               onChange={handleChange}
  //               style={{ width: '250px' }}
  //               renderValue={(selected) => selected.join(', ')}
  //             >
  //               {/* <MenuItem><FormControlLabel control={<Checkbox/>} label="Computer Science"/></MenuItem>
  //               <MenuItem><FormControlLabel control={<Checkbox/>} label="Business"/></MenuItem> */}
  //               <MenuItem>CS</MenuItem>
  //               <MenuItem>Business</MenuItem>
  //             </Select>
  //         </FormControl>
  //         <br/>
  //         If you are interested in joining a religious organization, what religions would you be interested in?
  //         <br/>
  //         <FormControl>
  //           <InputLabel id="demo-simple-select-label">Religious</InputLabel>
  //             <Select
  //               labelId="demo-simple-select-label"
  //               id="demo-simple-select"
  //               value={selectedOptions}
  //               label="Academic"
  //               multiple={true}
  //               onChange={handleChange}
  //               renderValue={(selected) => selected.join(', ')}
  //             >
  //               {/* <MenuItem><FormControlLabel control={<Checkbox/>} label="Computer Science"/></MenuItem>
  //               <MenuItem><FormControlLabel control={<Checkbox/>} label="Business"/></MenuItem> */}
  //               <MenuItem>Christianity</MenuItem>
  //               <MenuItem>Judaism</MenuItem>
  //               <MenuItem>Islam</MenuItem>
  //               <MenuItem>Hinduism</MenuItem>
  //               <MenuItem>Buddhism</MenuItem>
  //             </Select>
  //         </FormControl>
  //         <br/>
  //         If you are interested in joining a cultural organization, what cultures/ethnicities would you be interested in joining?
  //         <br/>
  //         <FormControl>
  //           <InputLabel id="demo-simple-select-label">Cultural</InputLabel>
  //             <Select
  //               labelId="demo-simple-select-label"
  //               id="demo-simple-select"
  //               value={selectedOptions}
  //               label="Academic"
  //               multiple={true}
  //               onChange={handleChange}
  //               renderValue={(selected) => selected.join(', ')}
  //             >
  //               {/* <MenuItem><FormControlLabel control={<Checkbox/>} label="Computer Science"/></MenuItem>
  //               <MenuItem><FormControlLabel control={<Checkbox/>} label="Business"/></MenuItem> */}
  //               <MenuItem>Korean</MenuItem>
  //               <MenuItem>Indian</MenuItem>
  //               <MenuItem>Pakistani</MenuItem>
  //               <MenuItem>African</MenuItem>
  //               <MenuItem>Greek</MenuItem>
  //             </Select>
  //         </FormControl>
  //         <br/>
  //         What types of organizations are you interested in?
  //         <br/>
  //         <FormControl>
  //         <InputLabel id="demo-simple-select-label">Cultural</InputLabel>
  //             <Select
  //               labelId="demo-simple-select-label"
  //               id="demo-simple-select"
  //               value={selectedOptions}
  //               label="Academic"
  //               multiple={true}
  //               onChange={handleChange}
  //               renderValue={(selected) => selected.join(', ')}
  //             >
  //               {/* <MenuItem><FormControlLabel control={<Checkbox/>} label="Computer Science"/></MenuItem>
  //               <MenuItem><FormControlLabel control={<Checkbox/>} label="Business"/></MenuItem> */}
  //               <MenuItem>Korean</MenuItem>
  //               <MenuItem>Indian</MenuItem>
  //               <MenuItem>Pakistani</MenuItem>
  //               <MenuItem>African</MenuItem>
  //               <MenuItem>Greek</MenuItem>
  //             </Select>
  //           <FormControlLabel control={<Checkbox/>} label="Arts and Music"/>
  //           <FormControlLabel control={<Checkbox/>} label="Club Sports"/>
  //           {/* <FormControlLabel control={<Checkbox/>} label="Cultural"/> */}
  //           <FormControlLabel control={<Checkbox/>} label="Fraternities"/>
  //           <FormControlLabel control={<Checkbox/>} label="Honor Societies"/>
  //           <FormControlLabel control={<Checkbox/>} label="Political"/>
  //           {/* <FormControlLabel control={<Checkbox/>} label="Religious"/> */}
  //           <FormControlLabel control={<Checkbox/>} label="Service"/>
  //           <FormControlLabel control={<Checkbox/>} label="Social"/>
  //           <FormControlLabel control={<Checkbox/>} label="Sororities"/>
  //           <FormControlLabel control={<Checkbox/>} label="Special Interest"/>
  //         </FormControl>
  //         <br/>
  //         What are your hobbies or areas of interest?
  //         <br/>
  //         <TextField id="outlined-basic" label="Hobbies or Areas of Interest" variant="outlined"/>
  //         <br/>
  //       </div>
  //       <p>Selected options: {selectedOptions.join(', ')}</p>
  //       <br/>
  //       <p>
  //         {message}
  //       </p>
  //       <Button variant="contained" color='primary' sx={styles} onClick={getHelloWorld}>Submit</Button>
  //       <br/>
  //     </header>
  //   </div>
  // );
}

export default App;

const styles = {
  '&.MuiButton-contained': {backgroundColor: 'salmon'},
}
