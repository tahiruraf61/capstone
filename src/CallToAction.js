import React from 'react'
import {useNavigate} from 'react-router-dom';

const CallToAction = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/booking-page');
    }

    return(
        <div>
            <button onClick= {handleClick} className="button">Reserve A Table</button>

        </div>

    )
}
export default CallToAction;