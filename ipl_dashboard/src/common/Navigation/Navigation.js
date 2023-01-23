import React, { Component } from "react";


export default class Navigation extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(    
            // <!-- Primary Navigation start -->
            <div className="container-fluid br_blue_background no_padding">
                <div className="container no_padding">
                    <div className="navbar navbar-inverse">
                        <div className="navbar-inner">
                            <div>
                                <div className="navbar-header">
                                    <button data-target=".primary_nav" data-toggle="collapse" className="navbar-toggle second-bar" type="button">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="no-display">Navbar Collapse</span>
                                    </button>
                                    <a href="#page">
                                        <span className="icn-bdr-2 utility-text"><i className="nc-icon-glyph media-1_button-power white-btn" title="Logout"></i>Logout</span>
                                    </a>
                                </div>
                                <div className="navbar-collapse collapse primary_nav">
                                    {/* <!-- primary nav list items start--> */}
                                    <ul className="nav navbar-nav white-nav navbar-nav-2" role="navigation">
                                       
                                        <li>
                                            <a href="#page">
                                                Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#page">
                                                Menu Item 1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#page">
                                                Menu Item 2
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#page">
                                                Menu Item 3
                                            </a>
                                        </li>
                                        <li className="dropdown" id="dropdownMenu">
                                            <a href="#page" data-toggle="dropdown" className="dropdown-toggle" role="button">
                                                Menu Item 4<span className="caret"></span>
                                            </a>
                                            <ul aria-labelledby="dropdownMenu" role="menu" className="dropdown-menu multi-level">
                                                <li>
                                                    <a href="#page">
                                                        Submenu Item 1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#page">
                                                        Submenu Item 2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#page">
                                                        Submenu Item 3
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#page">
                                                        Submenu Item 4
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    {/* <!-- primary nav list items end--> */}
        
                                    {/* <!-- search form start--> */}
                                    
                                   <div className="navbar-form navbar-right" role="search">
                                       <div className="headerSearchBox">
                                    <input className="form-control border-gray searchInput" type="text" placeholder="Search" aria-label="header-search"/>
                                    <button className="btn btn-group py-1 px-1 searchButton">
                                        <i className="material-icons">
                                            search
                                        </i>
                                    </button>
                                     </div>
                                    </div>
                                    
                    
                                    {/* <!-- search form end--> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            )
    }

}