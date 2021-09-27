import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Support () {

    const dispatch = useDispatch();
    const history = useHistory();
    const [support, setSupport] = useState(''); //need to use local state to capture user input

     //this function capture user inputs and uses dispatch to send the data via dispatch to store
    //once user has entered a ranking, moves to the next page of the form
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit - adding support');
        if (support > 5 || support < 1 || support === '') {
            alert('You must rate how supported you are feeling between 1 and 5!');
            return;
        }
        dispatch({
            type: 'SET_SUPPORT',
            payload: support,
        });
        history.push('/comments'); //sends user to next page in form
    }

    return(
        <>
            <h2>How are you feeling supported today?</h2>
        <form onSubmit={handleSubmit}>
            <p>Support: Please rank how well you are feeling supported from 1 - 5</p>
            <TextField type="number" onChange={(event) => setSupport(event.target.value)} placeholder="support" value={support} id="standard-basic" label="Support" variant="standard" />
            <Button style={{backgroundColor: '#432534', color: '#FFFFFF'}} variant="contained" type="submit">Next</Button>
        </form>

        </>
    )
}

export default Support;