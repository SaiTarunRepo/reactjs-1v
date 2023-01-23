import React from 'react';

function Body2(props){

    
    const displayText = props.text;
    

    if(displayText != null){
    return (<div className="demo-card__secondary mdc-typography mdc-typography--body2">
    {displayText}</div>);
    }else{
        return(null);
    }

   
    

}

export default Body2;