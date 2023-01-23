import React, { Component } from 'react';
import CardTitle from './CardTitle';
import CardSubTitle from './CardSubTitle';
import Body2 from "./Body2";
import CardMedia from "./CardMedia";
import CardMediaInsert from "./CardMediaInsert";
import Action from "../Button/Action";
import Avatar from "./Avatar";



export default class Card extends Component{
    constructor(props){
        super(props);
        this.state =  {
            
        }
    }
    
   

    render(){
        return(<div className="mdc-card demo-card">
            <div className="mdc-card__primary-action">
                <CardMedia url={this.props.CardMedia}/>
                <div className="demo-card__primary">
                    
                    <Avatar url={this.props.Avatar}/>
                                        
                    <CardTitle text={this.props.CardTitle} />
                    <CardSubTitle text={this.props.CardSubTitle}/>
                </div>
                <CardMediaInsert url={this.props.CardMediaInsert}/>
                <Body2 text={this.props.Body2}/>
            </div>
            <div className="mdc-card__actions">
                    <div className="mdc-card__action-buttons">
                        <Action label={this.props.Action}/>
                        <Action label={this.props.ActionTwo}/>
                    </div>
            </div>
    </div>);
    }
}