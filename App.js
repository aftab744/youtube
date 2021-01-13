import React from 'react';
import "./App.css"
import Header from "./Header.js";
import SearchPage from "./SearchPage.js";
import Sidebar from "./Sidebar.js";

import RecommendedVideos from "./RecommendedVideos.js";
import {BrowserRouter as Router,Switch,Route}from "react-router-dom";


function App(){
  return(
    <div className="app">
    <Router>
    <Header/>
    <Switch>
     <Route path="/search">
     <div className="app__page">
       <Sidebar/>
       <SearchPage/>
       </div>
     </Route>
     <Route path="/">
       <div className="app__page">
       <Sidebar/>
       <RecommendedVideos/>
       </div>
     </Route>
    </Switch>
    </Router>
    

    </div>);
}
export default App;