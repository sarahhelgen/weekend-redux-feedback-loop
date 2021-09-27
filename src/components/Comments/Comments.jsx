import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Comments () {

    const dispatch = useDispatch(); //need dispatch to send data to reduxStore
    const history = useHistory();
    const [comments, setComments ] = useState(''); //used local state to dispatch and capture inputs

     //this function captures user inputs and uses dispatch to send the data via dispatch to store
    
    const handleSubmit = (event) => {
        event.preventDefault(); //needed when using form
        console.log( 'in handleSubmit - adding comments');
        dispatch({
            type: 'SET_COMMENTS',
            payload: comments,
        });
        history.push('/review'); //once user has entered a ranking, moves to the next page of the form

    }


    return(
        <>
        <h2>Any comments you want to share?</h2>
        <form onSubmit={handleSubmit}>
            <p>Comments:</p>
            <TextField type="text" onChange={(event) => setComments(event.target.value)} placeholder="support" value={comments} id="standard-basic" label="Comments" variant="standard" />
            <Button style={{backgroundColor: '#c44900', color: '#FFFFFF'}} variant="contained" type="submit">Next</Button>
        </form>
        </>

    )
}

export default Comments;