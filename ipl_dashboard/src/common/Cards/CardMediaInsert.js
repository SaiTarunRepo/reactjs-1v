import React from 'react';

function CardMediaInsert(props){

    
    const url = props.url;
    

    if(url != null){
    return (<div className="mdc-card__media mdc-card__media--16-9 demo-card__media mb-3" style= {{background: "url('"+url+"')", backgroundSize:"cover"}}></div>);
    }else{
        return(null);
    }

   
    

}


export default CardMediaInsert;



