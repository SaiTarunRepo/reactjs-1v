import React from 'react';

function Avatar(props){

    
    const url = props.url;
    

    if(url != null){
    return (<div className="mdc-card-avatar"><img src={url} alt="" /></div>);
    }else{
        return(null);
    }

   
    

}


export default Avatar;



