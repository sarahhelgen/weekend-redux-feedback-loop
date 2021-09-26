import {useHistory} from 'react-router-dom';

function ThankYou () {

    const history = useHistory();
    //this page displays after a user sends their feedback to the db and
    //lets the user leave a new set of feedback
    return(
        <>
        <p>Thank You!</p>
        <button onClick={()=>history.push('/')}>Leave new feedback</button>
        </>

    )
}

export default ThankYou;