import React, { useState, useEffect } from 'react';
import ReviewItem from './ReviewItem';
import AddReview from './addReview/index';

let count = 2;
const ReviewList = ({
  reviews,
  setReviewList,
  product,
  filters,
  toggleFilter
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState('helpful');
  const [reviewsChanged, setReviewsChanged] = useState(false);
  const [helpfulReviews, setHelpfulReviews] = useState([]);

  useEffect(() => {
    setReviewList(product.id, 1, sort);
  }, [product.id, sort, reviewsChanged]);

  let filterDisplay;
  if (filters.length > 0) {
    filterDisplay = filters.map(filter => (
      <div key={filter} className="filter" onClick={() => toggleFilter(filter)}>
        {filter} star{filter === '1' ? '' : 's'}
      </div>
    ));
  } else {
    filterDisplay = <h3>No filters applied</h3>;
  }

  return (
    <>
      <div id="review-list-container" style={{ width: '60%' }}>
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

        <div id="sort-menu">
          <h2 className="inline">{reviews.length} reviews, sorted by</h2>
          <select
            onChange={e => setSort(e.target.value)}
            value={sort}
            className="inline"
          >
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
            <option value="relevant">Relevant</option>
          </select>
        </div>

        <div id="filter-container">{filterDisplay}</div>

        <div>
          {reviews
            .filter(review => {
              if (filters.length > 0) {
                for (let filter of filters) {
                  if (review.rating.toString() === filter) {
                    return true;
                  }
                }
                return false;
              } else {
                return true;
              }
            })
            .slice(0, count)
            .map(review => (
              <ReviewItem
                review={review}
                updateReviews={() => setReviewList(product.id, 1, sort)}
                key={review.review_id}
                setReviewsChanged={setReviewsChanged}
                reviewsChanged={reviewsChanged}
                helpfulReviews={helpfulReviews}
                setHelpfulReviews={setHelpfulReviews}
              />
            ))}
        </div>
      </div>
      <div id="review-list-container"></div>
    </>
  );
};

export default ReviewList;
