import React, { useEffect } from 'react';
import ReviewList from './ReviewList';
import RatingBreakdown from './RatingBreakdown';

const Reviews = ({
  product,
  characteristics,
  setCharacteristics,
  reviews,
  reviewList,
  id
}) => {
  if (product) {
    useEffect(() => {
      setCharacteristics(product.id);
    }, [product]);
  }

  if (
    product === null ||
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
          <RatingBreakdown productId={product.id} reviews={reviews.ratings} />
          <ReviewList reviews={reviewList} />
        </div>
      </div>
    );
  }
};

export default Reviews;
