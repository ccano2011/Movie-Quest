import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
//Componenets are imported below:
import Choices from "./components/Choices/Choices";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import List from "./components/List/List";
import Navbar from "./components/Navbar/Navbar";
import Pick from './components/Pick/Pick';
import './App.css'


function App() {
  const [fetchList, setFetchList] = useState(false);
  const [list, setList] = useState([]);
  // toggle the useEffect
  useEffect(() => {
    const getList = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/list`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setList(response.data.records);
    };
    getList();
    // toggle the useEffect
  }, [fetchList]);

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
          <Route path="/pick">
            <Pick
              fetchList={fetchList}
              setFetchList={setFetchList}
            />
          </Route>
          <Route path="/Choices">
            <Choices
              setFetchList={setFetchList}
              fetchList={fetchList} />
          </Route>
          <div className="myList">
            <Route path="/list">
              <List
                list={list}
                setFetchList={setFetchList}
                setList={setList}
                fetchList={fetchList} />
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
        <footer>
          <Footer />
        </footer>
      </>
    </div>
  );
}
export default App;
