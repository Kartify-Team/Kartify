import React, { useState } from 'react';
import ReviewItem from './ReviewItem';
import AddReview from './addReview/index';

let count = 4;
const ReviewList = ({ reviews, setReviewList, product }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div id="review-list-container">
        <button
          className="action-button"
          onClick={() => {
            setReviewList(product.id, 1, count);
            count += 2;
          }}
        >
          More Reviews
        </button>
        <button
          className="action-button"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Add Review
        </button>
        <AddReview setIsOpen={setIsOpen} isOpen={isOpen} product={product} />
        <div>{reviews.map(review => ReviewItem(review))}</div>
      </div>
      <div id="review-list-container"></div>
    </>
  );
};

export default ReviewList;
