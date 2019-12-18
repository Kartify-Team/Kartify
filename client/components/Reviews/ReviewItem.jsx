import React from 'react';
import Stars from './Stars';
import { formatDate } from '../../utils';
import {
  incrementHelpfulness,
  reportReview
} from '../../greenfieldAPI/reviews';

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
    reportReview,
    rating,
    summary,
    reviewer_name,
    review_id
  } = review;

  const displayDate = formatDate(date);

  const handleHelpful = reviewId => {
    if (helpfulReviews.includes(reviewId)) return;

    const newHelpfulReviews = [...helpfulReviews];
    newHelpfulReviews.push(reviewId);
    setHelpfulReviews(newHelpfulReviews);

    incrementHelpfulness(reviewId)
      .then(() => updateReviews())
      .then(() => setReviewsChanged(!reviewsChanged));
  };

  const handleReport = reviewId => {};

  return (
    <div className="review_item">
      <Stars stars={rating} />
      <p>{reviewer_name}</p>
      <p className="summary">{summary}</p>
      <p>{body}</p>
      <p>{displayDate.toLocaleString('en-US')}</p>
      Helpful?{' '}
      <p onClick={() => handleHelpful(review_id)}>
        <span
          className={
            helpfulReviews.includes(review_id) ? '' : 'underline-clickable'
          }
        >
          Yes
        </span>{' '}
        ({helpfulness})
      </p>
      <p
        className="underline-clickable"
        onClick={() => reportReview(review_id)}
      >
        Report
      </p>
    </div>
  );
};

export default ReviewItem;
