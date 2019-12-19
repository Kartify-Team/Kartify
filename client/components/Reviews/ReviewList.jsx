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
  let reviewCount;

  const filteredReviews = reviews.filter(review => {
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
  });

  reviewCount = filteredReviews.length;

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

        <div id="reviews-scroll">
          {filteredReviews.slice(0, count).map(review => (
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
          <div id="review-list-button-container" className="padding-ten">
            <button
              className="action-button review-button"
              style={{
                display: count >= reviewCount ? 'none' : 'inline-block'
              }}
              onClick={() => {
                setReviewList(product.id, 1, sort);
                count += 2;
              }}
            >
              MORE REVIEWS
            </button>
            <button
              className="action-button review-button"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              ADD REVIEW &nbsp;<i className="fa fa-plus"></i>
            </button>
          </div>
          <AddReview
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            product={product}
            sort={sort}
          />
        </div>
      </div>
    </>
  );
};

export default ReviewList;
