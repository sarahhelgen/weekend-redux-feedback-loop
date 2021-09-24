import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom'

function Feeling () {

    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState('');
    const history = useHistory();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit - adding feeling info', feeling ); 
        dispatch({
            type: 'SET_NEW_FEELING',
            payload: feeling
        });
        history.push('/understanding');
    }//end handleSubmit

    return (
        <>
        <h2>How are you feeling today?</h2>
        <form onSubmit={handleSubmit}>
            <p>Feeling:</p>
            <input type="number" onChange={(event) => setFeeling(event.target.value)} placeholder="feeling" value={feeling}/>
            <button>Next</button>
        </form>
        </>
    )

}


export default Feeling;