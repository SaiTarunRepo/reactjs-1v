import React from 'react';

function CardSubTitle(props){

    
    const displayText = props.text;
    

    if(displayText != null){
    return (<h3 className="demo-card__subtitle mdc-typography mdc-typography--overline">
    {displayText}</h3>);
    }else{
        return(null);
    }

   
    

}

export default CardSubTitle;