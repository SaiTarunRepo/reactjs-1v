import React from 'react';

function CardTitle(props){

    
    const displayText = props.text;
    

    if(displayText != null){
    return (<h2 className="demo-card__title mdc-typography mdc-typography--headline6">
    {displayText}</h2>);
    }else{
        return(null);
    }

   
    

}

export default CardTitle;