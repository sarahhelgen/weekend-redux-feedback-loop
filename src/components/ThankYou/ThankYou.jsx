import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Button from '@mui/material/Button';

function ThankYou () {

    const history = useHistory();
    const dispatch = useDispatch();
    //this page displays after a user sends their feedback to the db and
    //lets the user leave a new set of feedback
        const clearInputs = () => {
            console.log('in clearInputs');
            const action = {type: 'CLEAR_INPUTS'}
            dispatch(action);
            history.push('/');
        }
    return(
        <>
        <h2>Thank You!</h2>
        <Button variant="contained" style={{backgroundColor: '#432534', color: '#FFFFFF'}} onClick={clearInputs}>Leave new feedback</Button>
        </>
    )
}

export default ThankYou;