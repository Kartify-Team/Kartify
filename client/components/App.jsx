import React, { useEffect } from 'react';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import OverviewContainer from '../containers/Overview';
import OtherItemsContainer from '../containers/OtherItems';
import ReviewsContainer from '../containers/Reviews';
import QuestionsContainer from '../containers/Questions';

const App = ({ changeProduct, productInfo, setRatings }) => {
  changeProduct(useParams().id || 1);
  setRatings(useParams().id);

  console.log('APP RENDERING!'); // TODO: FIX APP INFINITE RENDERING
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
