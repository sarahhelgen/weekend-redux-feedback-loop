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
                feeling: feelingReducer.feeling,
                understanding: understandingReducer.understanding,
                support: supportReducer.support,
                comments: commentsReducer.comments,
            }
        }).then(response => {
            history.push('/');
        }).catch(error => {
            console.log('Error with POST to db', error);
        });

    }


    return (

        <>

            {JSON.stringify(reduxStore)}
            <p>Feelings: {feelingReducer.feeling} </p>
            <p>Understanding: {understandingReducer.understanding} </p>
            <p>Support: {supportReducer.support}</p>
            <p>Comments: {commentsReducer.comments} </p>
            <button onClick={handleSubmit}>Submit</button>
        </>

    )
}

export default Review;