import React from 'react';

function CardMedia(props){

    
    const url = props.url;
    

    if(url != null){
    return (<div className="mdc-card__media mdc-card__media--16-9 demo-card__media" style= {{background: "url('"+url+"')", backgroundSize:"cover"}}></div>);
    }else{
        return(null);
    }

   
    

}


export default CardMedia;



