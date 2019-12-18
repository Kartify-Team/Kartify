import React, { useState, useEffect } from 'react';
import ReviewItem from './ReviewItem';
import AddReview from './addReview/index';

let count = 2;
const ReviewList = ({ reviews, setReviewList, product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState('helpful');

  useEffect(() => {
    setReviewList(product.id, 1, sort);
  }, [sort]);

  return (
    <>
      <div id="review-list-container">
        <button
          className="action-button"
          onClick={() => {
            setReviewList(product.id, 1, sort);
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
        <AddReview
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          product={product}
          sort={sort}
        />
        <h2>{reviews.length} reviews, sorted by</h2>
        <select onChange={e => setSort(e.target.value)} value={sort}>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
          <option value="relevant">Relevant</option>
        </select>
        <div>{reviews.slice(0, count).map(review => ReviewItem(review))}</div>
      </div>
      <div id="review-list-container"></div>
    </>
  );
};

export default ReviewList;
