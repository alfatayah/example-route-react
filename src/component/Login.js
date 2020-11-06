import React from 'react'
import {Link} from 'react-router-dom'

const Login = (props) =>{
    return(
        <div>
            <button onClick={()=>{
                props.onLogin();
            }}>Login
            </button>
        </div>
  
    )
}

export default Login;