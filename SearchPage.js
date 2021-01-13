import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow.js";
import VideoRow from "./VideoRow.js";

function SearchPage(){
	return(
		<div className="searchPage">
		<div className="searchPage__filter">
		<TuneOutlinedIcon />
		<h2>Filter</h2>
		</div>
		<hr />
	<ChannelRow
		image=""
		channel="web dev"
		subs="1M"
		videos={567}
		description="You can find awesome programming videos"
	/>
	<hr/>
	<VideoRow 
     views="20M"
     subs="10k"
     description="programming videos for absolute beginers"
     timestamp="1 year"
     channel="aftab alam"
     title="Javascript Basics"
     image="https://pwim.com/wp-content/uploads/2015/08/Web-Dev.png"
	/>
	<hr/>
	<VideoRow 
     views="20M"
     subs="10k"
     description="programming videos for absolute beginers"
     timestamp="1 year"
     channel="aftab alam"
     title="Javascript Basics"
     image="https://pwim.com/wp-content/uploads/2015/08/Web-Dev.png"
	/>
	<hr/>
	<VideoRow 
     views="20M"
     subs="10k"
     description="programming videos for absolute beginers"
     timestamp="1 year"
     channel="aftab alam"
     title="Javascript Basics"
     image="https://pwim.com/wp-content/uploads/2015/08/Web-Dev.png"
	/>
	<hr/>
		
		
		</div>
	);
}
export default SearchPage;