import React from "react";
import "./App.css";
import SearchMovie from "./SearchMovie";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <div className="content">
        <h1>MOVIE SEARCH</h1>
        <SearchMovie />
      </div>
      <Footer />
    </div>
  );
}

export default App;
