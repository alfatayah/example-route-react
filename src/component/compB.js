import React from 'react'
import {Link} from 'react-router-dom'

const CompB = (props) =>{
    return(
        <div>
            Component B, come from {props.location.state.from}
            <br/>
             <Link to ='/'> Home</Link>
        </div>
  
    )
}

export default CompB;