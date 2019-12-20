import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import OverviewContainer from '../containers/Overview';
import OtherItemsContainer from '../containers/OtherItems';
import ReviewsContainer from '../containers/Reviews';
import QuestionsContainer from '../containers/Questions';

const App = ({ changeProduct, setRatings, setReviewList }) => {
  const id = useParams().id;
  const [dark, setDark] = useState(false)



  useEffect(() => {

    changeProduct(id);
    setRatings(id);
    setReviewList(id);

  }, [id]);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("theme", "dark");
      setDark(true)
    }
  }, [])

  const changeTheme = () => {
    setDark(!dark)
    if (dark) {
      document.documentElement.setAttribute("theme", "dark");
    } else {
      document.documentElement.setAttribute("theme", "light");
    }
  }



  return (<>
    <div className="topnav">
      <h1 id="site-title">Kartify</h1>
      <button className="action-button secondary" onClick={changeTheme}>change Theme</button>

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
