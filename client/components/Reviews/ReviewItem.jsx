import React, { useState } from 'react';
import Stars from './Stars';
import { formatDate } from '../../utils';
import {
  incrementHelpfulness,
  reportReview
} from '../../greenfieldAPI/reviews';
import ThumbnailGallery from '../Questions/ThumbnailGallery';

const ReviewItem = ({
  review,
  updateReviews,
  setReviewsChanged,
  reviewsChanged,
  setHelpfulReviews,
  helpfulReviews
}) => {
  const {
    body,
    date,
    helpfulness,
    rating,
    summary,
    reviewer_name,
    review_id,
    photos,
    recommend,
    response
  } = review;

  const [isReported, setIsReported] = useState(false);
  const [expandedReviews, setExpandedReviews] = useState([]);
  const displayDate = formatDate(date);
  const photoURLs = photos.map(photo => photo.url);

  const handleHelpful = reviewId => {
    if (helpfulReviews.includes(reviewId)) return;

    setHelpfulReviews([...helpfulReviews, reviewId]);

    incrementHelpfulness(reviewId)
      .then(() => updateReviews())
      .then(() => setReviewsChanged(!reviewsChanged));
  };

  const handleReport = reviewId => {
    reportReview(reviewId).then(() => {
      setIsReported(true);
    });
  };

  let responseContainer = null;
  if (response && response !== 'null') {
    responseContainer = (
      <div className="review-response">
        <h2>Response:</h2>
        <br />
        {response}
      </div>
    );
  }
  return (
    <div className="review-item">
      <div className="review-item-top">
        <Stars stars={rating} />
        <p>
          {reviewer_name}, {displayDate.toLocaleString('en-US')}
        </p>
      </div>
      <p className="summary">{summary}</p>
      <ThumbnailGallery imageURLs={photoURLs} />
      <p className="review-body">
        {expandedReviews.includes(review_id) ? body : body.slice(0, 250)}
        {body.length > 250 && !expandedReviews.includes(review_id) ? (
          <>
            &nbsp;
            <span
              className="underline-clickable show-more"
              onClick={() =>
                setExpandedReviews([...expandedReviews, review_id])
              }
            >
              ...show more
            </span>
          </>
        ) : null}
      </p>
      {recommend === 1 ? (
        <p>
          <i className="fa fa-check"></i> I recommend this product
        </p>
      ) : null}
      {responseContainer}
      <div className="review-item-bottom">
        Helpful?&nbsp;&nbsp;
        <span onClick={() => handleHelpful(review_id)}>
          <span
            className={
              helpfulReviews.includes(review_id) ? '' : 'underline-clickable'
            }
          >
            Yes
          </span>
        </span>
        &nbsp; ({helpfulness}) | &nbsp;
        <span
          className={isReported ? '' : 'underline-clickable'}
          onClick={() => handleReport(review_id)}
        >
          {isReported ? 'Reported' : 'Report'}
        </span>
      </div>
    </div>
  );
};
export default ReviewItem;
