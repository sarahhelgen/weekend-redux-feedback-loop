import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

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
        <button onClick={clearInputs}>Leave new feedback</button>
        </>
    )
}

export default ThankYou;