import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Review() {

    const reduxStore = useSelector(store => store);
    const { feelingReducer, understandingReducer, supportReducer, commentsReducer } = reduxStore;
    const history = useHistory();

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
            <button onClick={handleSubmit}>Submit</button>
        </>

    )
}

export default Review;