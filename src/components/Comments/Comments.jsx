import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom'


function Comments () {

    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments ] = useState('');


    return(
        <>
        <h2>Any comments you want to share?</h2>
        <form>
            <p>Comments:</p>
            <input placeholder="comments" type="text"/>
            <button>Next</button>
        </form>
        </>

    )
}

export default Comments;