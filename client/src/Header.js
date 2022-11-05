import React from 'react'
import menuicon from '../src/icon.png'
import logo from '../src/logo.jpeg'
// import Menu from "@material-ui/icons/Menu"
import Notification from "@material-ui/icons/Notifications"

import Search from "@material-ui/icons/Search"
import "./header.css";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/icons/AccountCircle";
function header() {
  return (
    <div className="header ">

      <div className='header_left'>
        <img className="menu_icon" src={menuicon} alt="menuicon" />
        <img className="logo" src={logo} alt="logo" srcset="" />
      </div>


      <div className="header_input"><input className='SearchArea' type="text" placeholder='Search' name="" id="" />
        <Search className='header_inputButton'/>
      </div>


      <div className='header_icons'>
        <AppsIcon />
        <Notification />
        <Avatar alt="Prince Yadav" src="/home/prince/Documents/webob/src/logo.jpeg" />
      </div>


    </div>
  );
}

export default header