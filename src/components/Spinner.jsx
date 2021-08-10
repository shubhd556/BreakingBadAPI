import React from 'react'
import spinner from '../img/animation.gif'

function Spinner() {
    return (
        <img src={spinner} style={{width:"500px",margin:"auto",display:"block"}}
        alt="Loading"
        />
    )
}

export default Spinner
