import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function Review() {

    const reduxStore = useSelector(store => store);
    const { feelingReducer, understandingReducer, supportReducer, commentsReducer } = reduxStore;
    const history = useHistory();

//this function uses selector to pull all the data that was sent to store in previous pages
//and display it on the DOM and then sends it via POST to the db on click of submit button

    const handleSubmit = () => {
        console.log('in handleSubmit - POST to db');
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feelingReducer,
                understanding: understandingReducer,
                support: supportReducer,
                comments: commentsReducer,
            }
        }).then(response => {
            history.push('/thankyou');
        }).catch(error => {
            console.log('Error with POST to db', error);
        });

    }


    return (

        <>

            {/* {JSON.stringify(reduxStore)} */}
            <h3>Please review your answers and submit:</h3>
            <p>Feelings: {feelingReducer} </p>
            <p>Understanding: {understandingReducer} </p>
            <p>Support: {supportReducer}</p>
            <p>Comments: {commentsReducer} </p>
            <Button style={{backgroundColor: '#04151f', color: '#FFFFFF'}} variant="contained" type="submit" onClick={handleSubmit}>Submit</Button>
        </>

    )
}

export default Review;