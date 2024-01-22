import '../App.css';
import { useNavigate, useLocation } from 'react-router-dom';
import {React} from 'react';
import {Button, Paper} from '@mui/material';

function Results() {
    // Setting variables
    const navigate = useNavigate();
    const location = useLocation();
    const receivedData = location.state?.data || 'You did not answer the provided questions. Please try again.';
    console.log(receivedData.length);

    // Split the data of recommended organizations into an array
    let data = receivedData.split("\n");
    data.pop();

    // Navigate back to the questions page
    const navigateToQuestions = () => {
        // Use the navigate function to navigate to Page2
        navigate('/');
    };

    // Results page showing the recommendations
    return (
        <header className='App-header'>
            <Paper className='form-background' style={paperStyle} elevation={3}>
                <h1>Organizations that we recommend based on your interests:</h1>
                <br/>
                {/* <p>{receivedData}</p> */}
                {data.map((option, index) => (
                    <div>
                        <h3>{index + 1}. {option.substring(0, option.indexOf(":"))}</h3>
                        <p className='fancyfont'>{option.substring(option.indexOf(":") + 2)}</p>
                    </div>
                ))}
                <Button variant="contained" color='primary' sx={styles} onClick={navigateToQuestions}>Go back</Button>
            </Paper>
            <br/>
        </header>
    );
}

export default Results;

const paperStyle = {
    //borderRadius: '25px',
}

const styles = {
    '&.MuiButton-contained': {backgroundColor: 'salmon'},
}