import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Support () {

    const dispatch = useDispatch();
    const history = useHistory();
    const [support, setSupport] = useState('');

    return(
        <>
            <h2>How are you feeling supported today?</h2>
        <form>
            <p>Support (rank 1 - 5):</p>
            <input placeholder="support"/>
            <button>Next</button>
        </form>

        </>
    )
}

export default Support;