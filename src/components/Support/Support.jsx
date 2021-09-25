import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Support () {

    const dispatch = useDispatch();
    const history = useHistory();
    const [support, setSupport] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit - adding support');
        if(support === ''){
            alert('You must rate how supported you feel!');
        }
        dispatch({
            type: 'SET_SUPPORT',
            payload: support,
        });
        history.push('/comments');
    }

    return(
        <>
            <h2>How are you feeling supported today?</h2>
        <form onSubmit={handleSubmit}>
            <p>Support (rank 1 - 5):</p>
            <input type="number" placeholder="support" value={support}
            onChange={(event) => setSupport(event.target.value)}/>
            <button type="submit">Next</button>
        </form>

        </>
    )
}

export default Support;