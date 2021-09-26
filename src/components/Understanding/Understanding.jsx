import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Understanding() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [understanding, setUnderstanding] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit - adding understanding info');
        if (understanding > 5 || understanding < 1 || understanding === '') {
            alert('You must rate your understanding between 1 and 5!');
        }
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understanding,
        });
        history.push('/support');
    }//end handleSubmit

    return (

        <>
            <h2>How well are you understanding the content?</h2>
            <form onSubmit={handleSubmit}>
                <p>Understanding: Please rank your understanding from 1 - 5</p>
                <input type="number" value={understanding} placeholder="understanding"
                    onChange={(event) => setUnderstanding(event.target.value)} />
                <button type="submit">Next</button>
            </form>
        </>
    )
}

export default Understanding;