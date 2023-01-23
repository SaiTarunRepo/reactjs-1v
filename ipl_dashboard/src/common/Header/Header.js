import React, { Component } from "react";


export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){

        const AppName = "Application Name";
        const HomeUrl = window.location.href;

        
        return(
            // <!-- header start -->
                
                <div id="header">
                    <div className="white_bg no-padding">
                        <nav className="navbar navbar-default custom_nav">
                            <div className="container-fluid">
                                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                                <div>
                                    <ul className="nav navbar-nav navbar-left logo-nav">
                                        <li>
                                            <a className="navbar-brand" href={HomeUrl}>
                                                <img alt="Broadridge Financial Solutions Inc." src="images/logo.png" className="logo left"/>
                                            </a>
                                            <span className="logo_text">{AppName}</span>
                                        </li>
                                    </ul>
                                </div>
        
                                {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                                <div id="header-util-nav" className="collapse navbar-collapse first-collapse">
                                    <ul role="navigation" className="nav yamm navbar-nav navbar-right utility_nav">
                                        <li className="dropdown">
                                            <a href="#page" className="icon-dis dropDownNav dropdown-toggle" data-toggle="dropdown" role="button">
                                                <i className="nc-icon-glyph ui-3_alert" title="Notifications"></i>
                                                <span _ngcontent-c0="" className="mat-badge mat-badge-warn mat-badge-above mat-badge-after mat-badge-medium ng-star-inserted" matbadgecolor="warn" matbadgeoverlap="false">
                                                    <span id="mat-badge-content-1" className="mat-badge-content mat-badge-active">3</span>
                                                </span>
                                                <span className="no-display">Notifications</span>
                                            </a>
                                            <ul className="dropdown-menu notify-drop sec-menu">
                                                <div className="notify-drop-title">
                                                    <div className="row">
                                                        <div className="col-md-8 col-sm-8 col-xs-8"><i className="nc-icon-glyph ui-3_alert"></i><span>Alert(s):</span></div>
                                                        <div className="col-md-4 col-sm-4 col-xs-4"><a href="#page"><span className="clear-all">Clear All</span></a></div>
                                                    </div>
                                                </div>
                                                {/* <!-- end notify title --> */}
                                                {/* <!-- notify content --> */}
                                                <div className="drop-content">
                                                    <li>
                                                        <div className="col-md-11 col-sm-10 col-xs-10"><a href="#page">Mark Hamill has unallocated hours in resource plan</a>
                                                        {/* <!-- <hr> --> */}
                                                        </div>
                                                        <div className="col-md-1 col-sm-2 col-xs-2">
                                                            <a href="#page" className="cleared"><i className="nc-icon-glyph ui-1_bold-remove"></i></a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="col-md-11 col-sm-10 col-xs-10"><a href="#page">PR complete within 25 business days</a>
                                                        </div>
                                                        <div className="col-md-1 col-sm-2 col-xs-2">
                                                            <a href="#page" className="cleared"><i className="nc-icon-glyph ui-1_bold-remove"></i></a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="col-md-11 col-sm-10 col-xs-10"><a href="#page">Lite:ICS-PSIK-SER-12345-DevOps is over 200 hours and requires</a>
                                                        </div>
                                                        <div className="col-md-1 col-sm-2 col-xs-2">
                                                            <a href="#page" className="cleared"><i className="nc-icon-glyph ui-1_bold-remove"></i></a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="col-md-11 col-sm-10 col-xs-10"><a href="#page">Mark Hamill has unallocated hours in resource plan</a>
                                                        {/* <!-- <hr> --> */}
                                                        </div>
                                                        <div className="col-md-1 col-sm-2 col-xs-2">
                                                            <a href="#page" className="cleared"><i className="nc-icon-glyph ui-1_bold-remove"></i></a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="col-md-11 col-sm-10 col-xs-10"><a href="#page">PR complete within 25 business days</a>
                                                        </div>
                                                        <div className="col-md-1 col-sm-2 col-xs-2">
                                                            <a href="#page" className="cleared"><i className="nc-icon-glyph ui-1_bold-remove"></i></a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="col-md-11 col-sm-10 col-xs-10"><a href="#page">Lite:ICS-PSIK-SER-12345-DevOps is over 200 hours and requires</a>
                                                        </div>
                                                        <div className="col-md-1 col-sm-2 col-xs-2">
                                                            <a href="#page" className="cleared"><i className="nc-icon-glyph ui-1_bold-remove"></i></a>
                                                        </div>
                                                    </li>
                                                </div>
                                            </ul>
                                            
                                        </li>
                                        <li className="dropdown">
                                            <a href="#page" className="icon-dis">
                                                <i className="nc-icon-glyph ui-3_phone" title="Contacts"></i>
                                                <span className="no-display">Contacts</span>
                                            </a>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#page" className="dropDownNav dropdown-toggle" data-toggle="dropdown" role="button">
                                                <span className="heromask utility-text">JD</span><span className="caret"></span>
                                            </a>
                                            <ul aria-labelledby="dropdownMenu" role="menu" className="dropdown-menu multi-level sub-menu">
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
                                            </ul>
                                        </li>
                                        <li className="dropdown block">
                                            <a href="#page">
                                                <span className="icn-bdr utility-text">Logout<i className="nc-icon-glyph media-1_button-power" title="Logout"></i></span>
                                            </a>
                                        </li>
                                      </ul>
                                </div>
                                {/* <!-- /.navbar-collapse --> */}
                            </div>
                            {/* <!-- /.container-fluid --> */}
                        </nav>
                    </div>
                </div>
                
             
            
        );
    }
}