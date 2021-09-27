import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Feeling() {

    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState('');
    const history = useHistory();
    

    //this function capture user inputs and uses dispatch to send the data via dispatch to store
    //once user has entered a ranking, moves to the next page of the form
    const handleSubmit = (event) => {
        event.preventDefault(); //needed for form
        //alert that user must chose a ranking 
        console.log('in handleSubmit - adding feeling info', feeling);
        if (feeling > 5 || feeling < 1 || feeling  === '') {
            alert('You must rate you are feeling between 1 and 5!');
            return;
        }
        dispatch({
            type: 'SET_FEELING',
            payload: feeling,
        });
        history.push('/understanding');
    }//end handleSubmit

    return (
        <>
            <h2>How are you feeling today?</h2>
            <form onSubmit={handleSubmit}>
                <p>Feeling: Please rank how you are feeling from 1 - 5</p>
                {/* <input type="number" onChange={(event) => setFeeling(event.target.value)} placeholder="feeling" value={feeling} /> */}
                <TextField type="number" onChange={(event) => setFeeling(event.target.value)} placeholder="feeling" value={feeling} id="standard-basic" label="Feeling" variant="standard" />
                <Button style={{backgroundColor: '#432534', color: '#FFFFFF'}} variant="contained" type="submit">Next</Button>
            </form>
        </>
    )

}


export default Feeling;