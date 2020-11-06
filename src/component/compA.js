import React from 'react'
import {Link} from 'react-router-dom';

const CompA = (props) =>{
    return(
        <div>
            Component A
            <br/>
            {/* < do not use a href='/compB'>Component B</a> */}
            <Link to={{pathname: '/compB', state: {from:'CompA'}}}>To Component B </Link> &nbsp; &nbsp;
            <Link to='./compC/1'> To Component C</Link>
        </div>
    )
}

export default CompA;