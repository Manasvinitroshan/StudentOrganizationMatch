//import logo from './logo.svg';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {React, useState} from 'react';
import {Button, ListItemText, TextField, Checkbox, FormControl, FormControlLabel, Select, InputLabel, MenuItem, Paper} from '@mui/material';

//Different religions
const religions = ["Christianity", "Judaism", "Islam", "Hinduism", "Buddhism"];

//Different cultures
const cultures = [
  "African", 
  "Greek", 
  "Hispanic", 
  "Indian", 
  "Korean", 
  "Pakistani", 
  "Chinese", 
  "Japanese", 
  "Filipino", 
  "Vietnamese", 
  "Native American", 
  "Middle Eastern", 
  "European", 
  "Russian", 
  "Polish", 
  "Irish", 
  "Italian", 
  "French", 
  "German", 
  "English", 
  "Scottish", 
  "Welsh", 
  "Dutch", 
  "Swedish", 
  "Norwegian", 
  "Danish", 
  "Finnish"
];

//Different academic interests
const academic = [
  "Artificial Intelligence",
  "Biology", 
  "Business Analytics",
  "Chemical Engineering",
  "Chemistry",
  "Computer Engineering",
  "Computer Science",
  "Data Science", 
  "Economics", 
  "Engineering (Any Type)",
  "English", 
  "Geology",
  "Geophysics",
  "History",
  "Information Technology",
  "Language", 
  "Literature", 
  "Math", 
  "Medicine", 
  "Physics",
  "Psychology", 
  "Robotics",
  "Statistics",
  "Software Engineering",
  "User Experience"
];

//Different club sports and recreation
const clubSportsAndRecreation = [
  "Golf",
  "Cricket",
  "Soccer",
  "Wrestling",
  "Karate",
  "E-Sports",
  "Weightlifting",
  "Billiard",
  "Sword Fighting",
  "Chess",
  "Beatboxing",
  "Taekwondo",
  "Board Gaming",
  "Book club",
  "Jujutsu",
  "Martial Arts",
  "Spikeball",
  "Crafting",
  "Mahjong",
  "Cycling",
  "Card Games"
];

function Questions() {

  //Setting the values for the different states
  const [gender, setGender] = useState("");
  const [selectedCulture, setSelectedCulture] = useState([]);
  const [selectedReligion, setSelectedReligion] = useState([]);
  const [selectedAcademic, setSelectedAcademic] = useState([]);
  const [selectedSports, setSelectedSports] = useState([]);
  const [additional, setAdditional] = useState([]);

  const navigate = useNavigate();

  // When the submit button is clicked, send a GET request to the backend with the submitted choices, get the results, and navigate to the results page
  const getData = async () => {
    let chosenOptions = selectedCulture.concat(selectedReligion, selectedAcademic, selectedSports, additional);
    console.log(chosenOptions);
    const optionsQueryString = `options=${chosenOptions.join('&options=')}`;
    const genderQueryString = `gender=${gender}`;
    const queryString = `?${optionsQueryString}&${genderQueryString}`;
    try {
      const response = await axios.get(`/clubs${queryString}`);
      console.log(response.data !== undefined ? response.data : "No data received");
      navigate('/results', {state: {data: response.data !== undefined ? response.data : "No data received"}});
    } catch (error) {
      console.error('Error making GET request:', error);
    }
  };

  // Handle the change of the gender options
  const genderChange = (event) => {
    setGender(event.target.value);
  };
  
  // Handle the change of the cultural options
  const cultureChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedCulture(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  // Handle the change of the religious options
  const religionChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedReligion(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  // Handle the change of the academic options
  const academicChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedAcademic(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  // Handle the change of the club sports and recreation options
  const sportsChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedSports(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  // Handle the changes of additional category options
  const handleChangeAdditional = (label) => {
    setAdditional((prevAdditional) => {
      if (prevAdditional.includes(label)) {
        return prevAdditional.filter((item) => item !== label);
      } else {
        return [...prevAdditional, label];
      }
    });
  };

  // Form for the questions
  return (
    <div>
      <header className="App-header">
        <Paper className='form-background' style={paperStyle} elevation={3}>
          <h1>Student Organization Match Card</h1>
          <p className='fancyfont'>What is your name?</p>
          
          <TextField id="outlined-basic" label="Full Name" variant="outlined" className='fancyfont' style={{ width: '250px' }}/>
          <br/>
          
          <p className='fancyfont'>What is your major?</p>
          <TextField id="outlined-basic" label="Major" variant="outlined"  style={{ width: '250px' }}/>

          {/* <p className='fancyfont'>What is your email?</p>
          <TextField id="outlined-basic" label="Enter your email" variant="outlined"  style={{ width: '250px' }}/> */}

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
              onChange={genderChange}
            >
              {/* <MenuItem><FormControlLabel control={<Checkbox/>} label="Computer Science"/></MenuItem>
              <MenuItem><FormControlLabel control={<Checkbox/>} label="Business"/></MenuItem> */}
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Non-Binary"}>Non-Binary</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
              <MenuItem value={"Prefer not to say"}>Prefer not to say</MenuItem>
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
              value={selectedSports}
              label="Academic"
              multiple={true}
              onChange={sportsChange}
              style={{ width: '250px' }}
              renderValue={(selected) => selected.join(', ')}
            >
            {/* <MenuItem><FormControlLabel control={<Checkbox/>} label="Computer Science"/></MenuItem>
            <MenuItem><FormControlLabel control={<Checkbox/>} label="Business"/></MenuItem> */}
              {clubSportsAndRecreation.map((option) => (
                <MenuItem key={option} value={option}>
                  <Checkbox checked={selectedSports.indexOf(option) > -1} />
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br/>
        
          <p className='fancyfont' >Choose what other kind of organizations you are interested in</p>
          <FormControl>
            <FormControlLabel control={<Checkbox onClick={() => handleChangeAdditional("Arts and Music")}/>} label="Arts and Music"/>
            {/* <FormControlLabel control={<Checkbox/>} label="Cultural"/> */}
            <FormControlLabel control={<Checkbox onClick={() => handleChangeAdditional("Fraternities")}/>} label="Fraternities"/>
            <FormControlLabel control={<Checkbox onClick={() => handleChangeAdditional("Honor Societies")}/>} label="Honor Societies"/>
            <FormControlLabel control={<Checkbox onClick={() => handleChangeAdditional("Political")}/>} label="Political"/>
            {/* <FormControlLabel control={<Checkbox/>} label="Religious"/> */}
            <FormControlLabel control={<Checkbox onClick={() => handleChangeAdditional("Service")}/>} label="Service"/>
            {/* <FormControlLabel control={<Checkbox/>} label={<p className='fancyfont'>Service</p>}/> */}
            <FormControlLabel control={<Checkbox onClick={() => handleChangeAdditional("Social")}/>} label="Social"/>
            <FormControlLabel control={<Checkbox onClick={() => handleChangeAdditional("Sororities")}/>} label="Sororities"/>
            <FormControlLabel control={<Checkbox onClick={() => handleChangeAdditional("Special Interest")}/>} label="Special Interest"/>
          </FormControl>
          <br/>
          <br/>
          <Button variant="contained" color='primary' sx={styles} onClick={getData}>Submit</Button>
          <br/>
        </Paper>
        
        <br/>
      </header>
    </div>
  );
}

export default Questions;

const styles = {
  '&.MuiButton-contained': {backgroundColor: 'salmon'},
}

const paperStyle = {
  //borderRadius: '25px',
}