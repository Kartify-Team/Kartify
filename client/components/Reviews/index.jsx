import React, { useEffect } from 'react';
import ReviewList from './ReviewList';
import RatingBreakdown from './RatingBreakdown';

const Reviews = ({
  product,
  characteristics,
  setCharacteristics,
  reviews,
  reviewList,
  setReviewList
}) => {
  if (product) {
    useEffect(() => {
      setCharacteristics(product.id);
    }, [product]);
  }

  if (
    product === null ||
    product === undefined ||
    reviews === null ||
    reviews === undefined ||
    reviews.ratings === undefined ||
    reviews.ratings === null ||
    reviews.reviewList === null ||
    reviews.reviewList === undefined
  ) {
    return null;
  } else {
    return (
      <div className="component">
        <h3>Ratings & Reviews</h3>
        <div id="reviews-container">
          <RatingBreakdown
            product={product}
            reviews={reviews.ratings}
            characteristics={characteristics}
          />
          <ReviewList
            reviews={reviewList}
            setReviewList={setReviewList}
            product={product}
          />
        </div>
      </div>
    );
  }
};

export default Reviews;
