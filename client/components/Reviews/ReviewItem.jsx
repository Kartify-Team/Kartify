import React from 'react';
import Stars from './Stars';
import { formatDate } from '../../utils';

const ReviewItem = ({
  body,
  date,
  helpfulness,
  rating,
  summary,
  reviewer_name,
  review_id
}) => {
  const displayDate = formatDate(date);
  return (
    <div key={review_id} className="review_item">
      <p>{reviewer_name}</p>
      <p className="summary">{summary}</p>
      <p>{body}</p>
      <p>Helpfulness: {helpfulness}</p>
      <p>{displayDate.toLocaleString('en-US')}</p>
      <Stars stars={rating} />
    </div>
  );
};

export default ReviewItem;
