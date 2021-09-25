import {useHistory} from 'react-router-dom';

function ThankYou () {

    const history = useHistory();

    return(
        <>
        <p>Thank You!</p>
        <button onClick={()=>history.push('/')}>Leave new feedback</button>
        </>

    )
}

export default ThankYou;