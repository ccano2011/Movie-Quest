import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
//Componenets are imported below:
// import Choice from './components/Choice/Choice'
import Homepage from "./components/Homepage/Homepage";
import List from "./components/List/List";
import Navbar from "./components/Navbar/Navbar";
import Options from "./components/Options/Options";
//import ".App.css"


function App() {
  const [fetchList, setFetchList] = useState([]);
  // toggle the useEffect
  useEffect(() => {
    const getList = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/list`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setFetchList(response.data.records);
    };
    getList();
    // toggle the useEffect
  }, []);

  return (
    <div className="App">
      <>
        <header>
          <Navbar />
        </header>
        <div className="body">
          {/* Route wraps whatever component you want to <Link to="">*/}
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/options">
            <Options />
          </Route>
          <div className="myList">
            <Route path="/list">
              <List fetchList={fetchList} />
            </Route>
          </div>
        </div>
        {/* <div className="bestOf"> */}
        {/* Redirects to Pick Component */}
        {/* <button>Find the best movies by Year & Genre</button> */}
        {/* </div> */}
        {/* <div className="myList"> */}
        {/* Redirects to List Component */}
        {/* <button>My List</button> */}
        {/* </div> */}
      </>
    </div>
  );
}
export default App;
