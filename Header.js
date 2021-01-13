import React,{useState} from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom";


import "./Header.css";



function Header(){
	const[inputSearch,setInputSearch]=useState("");
	return(
	<div className="header">
	<div className="header__left">
	<MenuIcon className="header__menu"/>
	
	<h1>Youtube</h1>
	
	</div>
	<div className="header__inputbar">
	<input onChange={e =>setInputSearch(e.target.value)} value={inputSearch} placeholder="Ask question..." type="text"/>
	<Link to={`/search/${inputSearch}`}>
	<SearchIcon className="header__searchbutton"/>
	</Link>
	</div>

	<div className="header__right">
	<VideoCallIcon className="header__right__avatar"/>
	<AppsIcon className="header__right__avatar"/>
	<NotificationsIcon className="header__right__avatar"/>
	<Avatar className="header__right__avatar"
	alt="aftab"
	src="https://4.bp.blogspot.com/-nt2yf3Qwlzk/WtgKCiuMUkI/AAAAAAAAF9w/fLER1Z3dHdII5DPmwdaGGHW46UOBpaHBQCEwYBhgL/s1600/cool%2Bprofile%2Bpictures.png"
	/>
	</div>

	</div>);
}
export default Header;