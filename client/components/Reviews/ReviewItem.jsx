import React from 'react';
import Stars from './Stars';

const ReviewItem = ({
  body,
  date,
  helpfulness,
  rating,
  summary,
  reviewer_name,
  review_id
}) => {
  return (
    <div key={review_id} className="review_item">
      <p>{reviewer_name}</p>
      <p>{summary}</p>
      <p>{body}</p>
      <p>Helpfulness: {helpfulness}</p>
      <p>{date.toLocaleString('en-US')}</p>
      <Stars stars={rating} />
    </div>
  );
};

export default ReviewItem;
