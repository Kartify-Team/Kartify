import React, { useEffect } from 'react';
import ReviewList from './ReviewList';
import RatingBreakdown from './RatingBreakdown';

const Reviews = ({
  product,
  characteristics,
  setCharacteristics,
  reviews,
  reviewList
}) => {
  if (product) {
    useEffect(() => {
      setCharacteristics(product.id);
    }, [product]);
  }

  if (!product || !reviews || !reviews.ratings) {
    return null;
  } else {
    return (
      <>
        <h3>Ratings & Reviews</h3>
        <div id="reviews-container">
          <RatingBreakdown productId={product.id} reviews={reviews.ratings} />
          <ReviewList />
        </div>
      </>
    );
  }
};

export default Reviews;
