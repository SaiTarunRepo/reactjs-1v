import React, { Component } from 'react';



export default class SelectBox extends Component {

    constructor (props) {
        super(props)
        this.state = {

        }
    }

    render() {


        const Options = this.props.Options;

        if(Options != null){

            const listItems = Options.map((option) =>
            <li className="mdc-list-item"  key={option} data-value={option} tabIndex="-1">{option}</li>
            );
          
            
                return( <div className="mdc-select mdc-select--outlined">
                <div className="mdc-select__anchor">
                  <i className="mdc-select__dropdown-icon"></i>
                  <div id={this.props.id} className="mdc-select__selected-text" aria-labelledby="outlined-select-label" tabIndex="0" aria-disabled="false" aria-expanded="false"></div>
                  <div className="mdc-notched-outline mdc-notched-outline--upgraded">
                    <div className="mdc-notched-outline__leading"></div>
                    <div className="mdc-notched-outline__notch" >
                      <span id="outlined-select-label" className="mdc-floating-label" >{this.props.label}</span>
                    </div>
                    <div className="mdc-notched-outline__trailing"></div>
                  </div>
                </div>
              
               
                <div className="mdc-select__menu mdc-menu mdc-menu-surface" role="listbox" >
                    <ul className="mdc-list">
                    {listItems}
                    </ul>
                </div>
              </div>);

        }else{
            return(null);
        }
   

    
    }

}