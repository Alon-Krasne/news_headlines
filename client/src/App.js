import './App.css';
import React, { useState } from "react";
import FilterForm from "./components/filter";
import NewsArticles from "./components/articles";
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  const [articles, setArticles] = useState([]);

  return (
    <Router>
      <div className="App">
        <div className="FilterForm">
          <FilterForm setArticles={setArticles} />
        </div>
        <div className="NewsArticles">
          <NewsArticles articles={articles} />
        </div>
      </div>
    </Router>
  );
}

export default App;
