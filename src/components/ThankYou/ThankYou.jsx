import {useHistory} from 'react-router-dom';

function ThankYou () {

    const history = useHistory();
    //this page displays after a user sends their feedback to the db and
    //lets the user leave a new set of feedback
    return(
        <>
        <h2>Thank You!</h2>
        <button onClick={()=>history.push('/')}>Leave new feedback</button>
        </>

    )
}

export default ThankYou;