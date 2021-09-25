import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom'


function Comments () {

    const dispatch = useDispatch(); //need dispatch to send data to reduxStore
    const history = useHistory();
    const [comments, setComments ] = useState(''); //used local state to dispatch and capture inputs

    const handleSubmit = (event) => {
        event.preventDefault(); //needed when using form
        console.log( 'in handleSubmit - adding comments');
        dispatch({
            type: 'SET_COMMENTS',
            payload: comments,
        });
        history.push('/review');

    }


    return(
        <>
        <h2>Any comments you want to share?</h2>
        <form onSubmit={handleSubmit}>
            <p>Comments:</p>
            <input placeholder="comments" type="text" value={comments}
            onChange={(event) => setComments(event.target.value)}/>
            <button type="submit">Next</button>
        </form>
        </>

    )
}

export default Comments;