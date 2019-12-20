import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import OverviewContainer from '../containers/Overview';
import OtherItemsContainer from '../containers/OtherItems';
import ReviewsContainer from '../containers/Reviews';
import QuestionsContainer from '../containers/Questions';

const App = ({ changeProduct, setRatings, setReviewList, getRelatedProducts, getMyOutfit }) => {
  const id = useParams().id;
  const [dark, setDark] = useState(false)



  useEffect(() => {

    changeProduct(id);
    setRatings(id);
    setReviewList(id);
    getRelatedProducts(id);
    getMyOutfit();
  }, [id]);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("theme", "dark");
      console.log("dark")
      setDark(true)
    }
  }, [])

  useEffect(() => {
    if (dark) {
      document.documentElement.setAttribute("theme", "dark");
    } else {
      document.documentElement.setAttribute("theme", "light");
    }
  }, [dark])

  return (<>
    <div className="topnav">
      <h1 id="site-title">Kartify</h1>
      <div id="theme-toggle" onClick={() => setDark(!dark)}>
        <span className="toggle-icon">☀️</span>
        <span className="toggle-icon"> <i className={`fa fa-toggle-on ${dark ? "" : "fa-flip-horizontal"}`}></i>
        </span>
        <span className="toggle-icon">🌙</span>
      </div>

    </div>
    <div id="components-container">

      <OverviewContainer />
      <OtherItemsContainer />
      <QuestionsContainer />
      <ReviewsContainer />

    </div>
  </>);
};

export default App;
