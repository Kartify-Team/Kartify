import React from 'react';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import OverviewContainer from '../containers/Overview';
import OtherItemsContainer from '../containers/OtherItems';
import ReviewsContainer from '../containers/Reviews';
import QuestionsContainer from '../containers/Questions';

const App = ({ changeProduct, productInfo }) => {
  changeProduct(useParams().id || 1);
  return (
      <div id="components-container">
        <OverviewContainer />
        <OtherItemsContainer />
        <ReviewsContainer />
        <QuestionsContainer />
      </div>
  );
};

export default App;