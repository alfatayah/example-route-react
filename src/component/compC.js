import React from 'react'

const CompC = (props) =>{
    return(
        <div>
            Component C
             <div>{props.match.params.num}</div>
        </div>
  
    )
}

export default CompC;