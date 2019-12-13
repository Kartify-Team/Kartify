import React, { useEffect } from 'react';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import OverviewContainer from '../containers/Overview';
import OtherItemsContainer from '../containers/OtherItems';
import ReviewsContainer from '../containers/Reviews';
import QuestionsContainer from '../containers/Questions';

const App = ({ changeProduct, setRatings, setProductImageInfo }) => {
  const id = useParams().id;
  useEffect(() => {
    changeProduct(id);
    setRatings(id);
    setProductImageInfo(id);
  }, []);

  return (
    <div id="components-container">
      <OverviewContainer />
      <OtherItemsContainer />
      <QuestionsContainer />
      <ReviewsContainer />
    </div>
  );
};

export default App;